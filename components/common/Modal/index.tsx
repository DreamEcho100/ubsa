// Credit to:
// - [Creating An Accessible Dialog From Scratch (smashingmagazine.com)](https://www.smashingmagazine.com/2021/07/accessible-dialog-from-scratch/)
// - [How To Make Modal Windows Better For Everyone](https://www.smashingmagazine.com/2014/09/making-modal-windows-better-for-everyone/)

import {
	FC,
	HTMLAttributes,
	KeyboardEvent,
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';

import classes from './index.module.css';

// type TPropsHandler0 = () => void;
// interface IPropsHandler1 {
// 	handleSetIsModalVisible: (
// 		isVisible?: boolean,
// 		handleSetIsModalVisibleOptions?: { [key: string]: any }
// 	) => void;
// 	handleSetIsModalVisibleOptions?: { [key: string]: any };
// }

interface ICustomDivProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
	className?: string | ((defaultClassName: string) => string);
	children?: ReactNode;
}

export type TModalComponentProps = {
	children: JSX.Element | JSX.Element[];
	// isVisible: boolean;
	handleIsVisible: Function; // TPropsHandler0 | IPropsHandler1;
	isVisible: boolean;
	wrapperElem?: ICustomDivProps;
	containerElem?: ICustomDivProps;
	containerHeaderElem?: ICustomDivProps;
	containerBodyElem?: ICustomDivProps;
	containerFooterElem?: ICustomDivProps;
} & (
	| {
			handleIsVisible: Function; // TPropsHandler0 | IPropsHandler1;
			isVisible: boolean;
	  }
	| {}
);

const focusableSelectors = [
	'a[href]:not([tabindex^="-"])',
	'area[href]:not([tabindex^="-"])',
	'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
	'input[type="radio"]:not([disabled]):not([tabindex^="-"]):checked',
	'select:not([disabled]):not([tabindex^="-"])',
	'textarea:not([disabled]):not([tabindex^="-"])',
	'button:not([disabled]):not([tabindex^="-"])',
	'iframe:not([tabindex^="-"])',
	'audio[controls]:not([tabindex^="-"])',
	'video[controls]:not([tabindex^="-"])',
	'[contenteditable]:not([tabindex^="-"])',
	'[tabindex]:not([tabindex^="-"])',
];

const Modal: FC<TModalComponentProps> = ({
	children,
	// handleIsVisible,
	// isVisible,
	handleIsVisible,
	isVisible,
	wrapperElem,
	containerElem,
	containerHeaderElem,
	containerBodyElem,
	containerFooterElem,
	// ...props
}) => {
	// const isChildrenArray = Array.isArray(children);

	const [s, sT] = useState(false);

	const modalProps = useRef<{
		lastElementFocusedBeforeThisModal: Element | null;
		bodyOverflowBeforeModal?: string;
	}>({
		lastElementFocusedBeforeThisModal: null,
		bodyOverflowBeforeModal: undefined,
	});
	const modalContainerCloseButtonPropsProps = useRef<HTMLButtonElement>(null);

	const modalWrapperRef = useRef<HTMLDivElement>(null);
	const modalContainerBodyRef = useRef<HTMLDivElement>(null);

	const ElementSelected = typeof window !== 'undefined' && document.body;

	const findByKey = (
		name: 'header' | 'body' | 'footer',
		children: JSX.Element[]
	) => children.filter((child) => child.key === name);

	const getFocusableChildren = () => {
		const elements: Element[] = [];

		modalWrapperRef.current
			?.querySelectorAll(focusableSelectors.join(','))
			?.forEach((nodeElem) => elements.push(nodeElem));

		return elements.filter(
			(element) =>
				element instanceof HTMLElement &&
				(element.offsetWidth ||
					element.offsetWidth ||
					element.getClientRects().length)
		);
	};

	const closeModalHandler = () => {
		if (
			// 'handleIsVisible' in props && 'isVisible' in props
			handleIsVisible &&
			isVisible
		) {
			handleIsVisible({ isVisible });
		}
	};

	const moveFocusIn = useCallback(() => {
		const target =
			modalContainerBodyRef.current?.querySelector('[autofocus]') ||
			getFocusableChildren()[0];

		if (target instanceof HTMLElement) target.focus();
	}, []);

	const trapTapKey = (event: KeyboardEvent<HTMLDivElement>) => {
		const node = modalContainerBodyRef.current;
		if (!document.activeElement || !node) return;

		const focusableChildren = getFocusableChildren();
		const focusedItemIndex = focusableChildren.indexOf(document.activeElement);
		const lastIndex = focusableChildren.length - 1;
		const withShift = event.shiftKey;
		const withCtrlKey = event.ctrlKey;

		if (withCtrlKey && withShift && focusedItemIndex === 0) {
			if (focusableChildren[lastIndex] instanceof HTMLElement) {
				(focusableChildren[lastIndex] as HTMLElement).focus();
			}
			event.preventDefault();
		} else if (!withShift && focusedItemIndex === lastIndex) {
			if (focusableChildren[0] instanceof HTMLElement) {
				(focusableChildren[0] as HTMLElement).focus();
			}
			event.preventDefault();
		}
	};
	const modalContainerOnKeyDownEventHandler = (
		event: KeyboardEvent<HTMLDivElement>
	) => {
		if (event.key === 'Escape') return closeModalHandler();
		if (event.key === 'Tab') return trapTapKey(event);
	};
	useEffect(() => {
		if (isVisible) {
			modalProps.current.bodyOverflowBeforeModal = getComputedStyle(
				document.body
			).overflow;

			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'hidden';

			modalProps.current.lastElementFocusedBeforeThisModal =
				document.activeElement;

			moveFocusIn();
		} else {
			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'auto';

			if (
				modalProps.current.lastElementFocusedBeforeThisModal instanceof
				HTMLElement
			) {
				modalProps.current.lastElementFocusedBeforeThisModal.focus();
			}
		}
	}, [isVisible, moveFocusIn]);

	if (!isVisible || !ElementSelected) {
		return <></>;
	}

	const handleClassName = (
		defaultClassName: string,
		className?: string | ((defaultClassName: string) => string)
	) => {
		return typeof className === 'function'
			? className(defaultClassName) // classes.default
			: typeof className === 'string'
			? `${defaultClassName} ${className}`
			: defaultClassName;
	};

	const handleCustomDivProps = (
		props: ICustomDivProps = {
			children: undefined,
		},
		options: {
			defaultClassName: string;
		}
	) => {
		const { className } = props;

		return {
			...props,
			className: handleClassName(options.defaultClassName, className),
		};
	};

	return createPortal(
		<div
			{...handleCustomDivProps(wrapperElem, {
				defaultClassName: classes.wrapper,
			})}
			ref={modalWrapperRef}
			onClick={(event: MouseEvent) => {
				event.stopPropagation();
				if (event.target === event.currentTarget) closeModalHandler();
			}}
		>
			{/* <div className={classes.wrapper}> */}
			<div
				{...handleCustomDivProps(containerElem, {
					defaultClassName: classes.modalContainerDefault,
				})}
				onKeyDown={modalContainerOnKeyDownEventHandler}
			>
				<button
					// tabIndex={0}
					ref={modalContainerCloseButtonPropsProps}
					onClick={closeModalHandler}
					type='button'
					className={classes.ModalCloseButton}
					aria-label='close'
				>
					x
				</button>
				{Array.isArray(children) ? (
					<>
						<header
							{...handleCustomDivProps(containerHeaderElem, {
								defaultClassName: classes.modalHeaderDefault,
							})}
						>
							{findByKey('header', children)}
						</header>
						<section
							{...handleCustomDivProps(containerBodyElem, {
								defaultClassName: classes.modalBodyDefault,
							})}
							ref={modalContainerBodyRef}
						>
							{findByKey('body', children)}
						</section>
						<footer
							{...handleCustomDivProps(containerFooterElem, {
								defaultClassName: classes.modalFooterDefault,
							})}
						>
							{findByKey('footer', children)}
						</footer>
					</>
				) : (
					<section
						{...handleCustomDivProps(containerBodyElem, {
							defaultClassName: classes.modalBodyDefault,
						})}
						ref={modalContainerBodyRef}
					>
						{children}
					</section>
				)}
			</div>
			{/* </div> */}
		</div>,
		ElementSelected
	);
};

export default Modal;

import { useCallback, useEffect, useRef } from 'react';
import type { TouchEvent, MouseEvent, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	outerSliderClassName?: string;
	innerSliderClassName?: string;
	autoMove?: boolean;
}

interface IPosRef {
	sliderDragAnimationID: number;
	isPointing: boolean;
	isDragging: boolean;
	oldXTranslate: number;
	currXTranslate: number;
	sliderXPos: number;
	outerSliderCoordination?: DOMRect;
	innerSliderCoordination?: DOMRect;
	firstSliderCoordination?: DOMRect;
	lastSliderCoordination?: DOMRect;
	autoMove: {
		active: boolean;
		intervalId?: number;
		xDir: number;
		step: number;
	};
}

const Slider = ({
	children,
	outerSliderClassName,
	innerSliderClassName,
	autoMove,
}: Props) => {
	const outerSliderRef = useRef<HTMLDivElement>(null);
	const innerSliderRef = useRef<HTMLDivElement>(null);
	const outerSliderMaskRef = useRef<HTMLDivElement>(null);

	const posRef = useRef<IPosRef>({
		sliderDragAnimationID: 0,
		isPointing: false,
		isDragging: false,
		oldXTranslate: 0,
		currXTranslate: 0,
		sliderXPos: 0,
		outerSliderCoordination: outerSliderRef.current?.getBoundingClientRect(),
		innerSliderCoordination: innerSliderRef.current?.getBoundingClientRect(),
		firstSliderCoordination:
			innerSliderRef.current?.children[0]?.getBoundingClientRect(),
		lastSliderCoordination:
			innerSliderRef.current?.children[
				innerSliderRef.current?.children?.length - 1
			]?.getBoundingClientRect(),
		autoMove: {
			active: false,
			xDir: 1,
			step: 1,
		},
	});

	const getPositionX = (event: TouchEvent | MouseEvent): number => {
		if (event.nativeEvent instanceof TouchEvent) {
			return event.nativeEvent.touches[0].clientX;
		}

		if (event.nativeEvent instanceof MouseEvent) {
			return event.nativeEvent.pageX;
		}

		return 0;
	};
	const checkSliderBoundary = (num: number) => {
		if (!outerSliderRef.current || !innerSliderRef.current) return;

		posRef.current.outerSliderCoordination =
			outerSliderRef.current?.getBoundingClientRect();

		if (num > 0) {
			posRef.current.innerSliderCoordination =
				innerSliderRef.current.getBoundingClientRect();

			if (
				posRef.current.innerSliderCoordination.x + num >=
				posRef.current.outerSliderCoordination.x
			)
				return true;
		} else if (num < 0) {
			posRef.current.lastSliderCoordination =
				innerSliderRef.current.children[
					innerSliderRef.current.children.length - 1
				].getBoundingClientRect();

			if (
				posRef.current.lastSliderCoordination.right -
					posRef.current.lastSliderCoordination.width * 0.05 +
					num <
				posRef.current.outerSliderCoordination.left
			)
				return true;

			posRef.current.innerSliderCoordination =
				innerSliderRef.current.getBoundingClientRect();
		}

		return false;
	};
	const sliderDragAnimation = useCallback(() => {
		setSliderPosition();
		if (posRef.current.isDragging)
			return requestAnimationFrame(sliderDragAnimation);
		return 0;
	}, []);
	const setSliderPosition = () => {
		if (!innerSliderRef.current) return;
		innerSliderRef.current.style.transform = `translateX(${posRef.current.sliderXPos}px)`;
	};

	const touchStart = (event: TouchEvent | MouseEvent) => {
		// event.preventDefault();

		if (!outerSliderRef.current) return;

		posRef.current.isPointing = true;
		posRef.current.oldXTranslate = getPositionX(event);
		// posRef.current.isDragging = true;
		// outerSliderRef.current.style.cursor = 'grabbing';
	};

	const touchEnd = (event: TouchEvent | MouseEvent) => {
		// event.preventDefault();

		if (
			!outerSliderRef.current ||
			!outerSliderMaskRef.current ||
			typeof posRef.current.sliderDragAnimationID !== 'number'
		)
			return;

		if (posRef.current.isDragging) {
			event.preventDefault();

			posRef.current.isDragging = false;
			outerSliderMaskRef.current.style.pointerEvents = 'none';
			outerSliderMaskRef.current.style.cursor = 'grab';
			cancelAnimationFrame(posRef.current.sliderDragAnimationID);
		}

		posRef.current.isPointing = false;

		posRef.current.autoMove.intervalId = requestAnimationFrame(handleAutoMove);
	};

	const touchMove = (event: TouchEvent | MouseEvent) => {
		event.preventDefault();

		if (!outerSliderMaskRef.current) return;

		if (
			!posRef.current.isPointing ||
			checkSliderBoundary(getPositionX(event) - posRef.current.oldXTranslate)
		)
			return;

		posRef.current.isDragging = true;
		outerSliderMaskRef.current.style.pointerEvents = 'auto';
		outerSliderMaskRef.current.style.cursor = 'grabbing';

		posRef.current.currXTranslate = getPositionX(event);

		const temp = posRef.current.currXTranslate - posRef.current.oldXTranslate;

		posRef.current.sliderXPos += temp;

		if (temp > 1) posRef.current.autoMove.xDir = 1;
		else if (temp < 1) posRef.current.autoMove.xDir = -1;

		posRef.current.sliderDragAnimationID =
			requestAnimationFrame(sliderDragAnimation);

		posRef.current.oldXTranslate = posRef.current.currXTranslate;
	};

	const handleAutoMove = useCallback(() => {
		if (!outerSliderMaskRef.current || !innerSliderRef.current) return;

		if (posRef.current.isPointing) {
			return (
				posRef.current.autoMove.intervalId &&
				cancelAnimationFrame(posRef.current.autoMove.intervalId)
			);
		}

		const stepDir = posRef.current.autoMove.step * posRef.current.autoMove.xDir;

		if (checkSliderBoundary(stepDir)) {
			posRef.current.autoMove.xDir *= -1;

			posRef.current.currXTranslate += stepDir;
		}

		posRef.current.currXTranslate += stepDir;

		posRef.current.sliderXPos +=
			posRef.current.currXTranslate - posRef.current.oldXTranslate;

		posRef.current.sliderDragAnimationID =
			requestAnimationFrame(sliderDragAnimation);

		posRef.current.oldXTranslate = posRef.current.currXTranslate;

		posRef.current.autoMove.intervalId = requestAnimationFrame(handleAutoMove);
	}, [sliderDragAnimation]);
	useEffect(() => {
		posRef.current.autoMove.active = !!autoMove;

		if (!posRef.current.autoMove.active) {
			return;
		}

		posRef.current.autoMove.intervalId = requestAnimationFrame(handleAutoMove);

		let intervalId = posRef.current.autoMove.intervalId;

		return () => {
			cancelAnimationFrame(intervalId);
		};
	}, [autoMove, handleAutoMove]);

	return (
		<div
			className={`outer-slider ${outerSliderClassName}`}
			ref={outerSliderRef}
			onTouchStart={touchStart}
			onMouseDown={touchStart}
			onTouchEnd={touchEnd}
			onMouseUp={touchEnd}
			onMouseLeave={touchEnd}
			onTouchMove={touchMove}
			onMouseMove={touchMove}
			style={{
				position: 'relative',
			}}
		>
			<div
				className='outer-slider_mask'
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					zIndex: '999',
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
				}}
				ref={outerSliderMaskRef}
				onContextMenu={(event: MouseEvent<HTMLDivElement>) => {
					event.preventDefault();
					event.stopPropagation();
					return false;
					// if (posRef.current.isDragging) {
					// }
				}}
			></div>
			<div
				className={`inner-slider ${innerSliderClassName}`}
				ref={innerSliderRef}
			>
				{children}
			</div>
		</div>
	);
};

export default Slider;

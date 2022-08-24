import React, { useRef } from 'react';

interface Props {
	children: React.ReactNode;
	outerSliderClassName?: string;
	innerSliderClassName?: string;
}

interface IPosRef {
	sliderDragAnimationID: number;
	isPointing: boolean;
	isDragging: boolean;
	oldXTranslate: number;
	currXTranslate: number;
	sliderXPos: number;
	// {[key: string]: string | number | boolean | null}
	//HTMLDivElement['getBoundingClientRect'];
	// ClientRect | DOMRect
	outerSliderCoordination?: DOMRect;
	innerSliderCoordination?: DOMRect;
	firstSliderCoordination?: DOMRect;
	lastSliderCoordination?: DOMRect;
}

const Slider = ({
	children,
	outerSliderClassName,
	innerSliderClassName,
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
	});

	const getPositionX = (event: React.TouchEvent | React.MouseEvent): number => {
		// event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
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
			// posRef.current.firstSliderCoordination =
			// 	innerSliderRef.current.children[0].getBoundingClientRect();

			posRef.current.innerSliderCoordination =
				innerSliderRef.current.getBoundingClientRect();

			if (
				posRef.current.innerSliderCoordination.x + num >=
				posRef.current.outerSliderCoordination.x
			)
				return true;

			// else {
			// 	console.log(
			// 		'posRef.current.firstSliderCoordination.x',
			// 		posRef.current.firstSliderCoordination.x
			// 	);
			// 	console.log('num', num);
			// 	console.log(
			// 		'posRef.current.outerSliderCoordination.x',
			// 		posRef.current.outerSliderCoordination.x
			// 	);
			// 	console.log(false);
			// }

			// if (
			// 	posRef.current.firstSliderCoordination.left +
			// 		posRef.current.firstSliderCoordination.width * 0.05 +
			// 		num >
			// 	posRef.current.outerSliderCoordination.right
			// )
			// 	return true;
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

			// if (
			// 	posRef.current.innerSliderCoordination.x +
			// 		posRef.current.innerSliderCoordination.width -
			// 		num <=
			// 	posRef.current.outerSliderCoordination.x +
			// 		posRef.current.outerSliderCoordination.width
			// )
			// 	return true;
			// else {
			// 	console.log(false);
			// 	console.log(
			// 		'posRef.current.innerSliderCoordination',
			// 		posRef.current.innerSliderCoordination
			// 	);
			// 	console.log(
			// 		'posRef.current.innerSliderCoordination.x',
			// 		posRef.current.innerSliderCoordination.x
			// 	);
			// 	console.log(
			// 		'posRef.current.innerSliderCoordination.width',
			// 		posRef.current.innerSliderCoordination.width
			// 	);
			// 	console.log('num', num);
			// 	console.log(
			// 		'posRef.current.outerSliderCoordination.x',
			// 		posRef.current.outerSliderCoordination.x
			// 	);
			// 	console.log(
			// 		'posRef.current.outerSliderCoordination.width',
			// 		posRef.current.outerSliderCoordination.width
			// 	);
			// }
		}

		return false;
	};
	const sliderDragAnimation = () => {
		setSliderPosition();
		if (posRef.current.isDragging)
			return requestAnimationFrame(sliderDragAnimation);
		return 0;
	};

	const setSliderPosition = () => {
		if (!innerSliderRef.current) return;
		innerSliderRef.current.style.transform = `translateX(${posRef.current.sliderXPos}px)`;
	};

	const touchStart = (event: React.TouchEvent | React.MouseEvent) => {
		// event.preventDefault();

		if (!outerSliderRef.current) return;

		posRef.current.isPointing = true;
		posRef.current.oldXTranslate = getPositionX(event);
		// posRef.current.isDragging = true;
		// outerSliderRef.current.style.cursor = 'grabbing';
	};

	const touchEnd = (event: React.TouchEvent | React.MouseEvent) => {
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
			// outerSliderRef.current.style.cursor = 'grab';
			outerSliderMaskRef.current.style.pointerEvents = 'none';
			outerSliderMaskRef.current.style.cursor = 'grab';
			cancelAnimationFrame(posRef.current.sliderDragAnimationID);
		}

		posRef.current.isPointing = false;
	};

	const touchMove = (event: React.TouchEvent | React.MouseEvent) => {
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
		// innerSliderRef.style.cursor = 'grabbing';

		posRef.current.currXTranslate = getPositionX(event);

		posRef.current.sliderXPos +=
			posRef.current.currXTranslate - posRef.current.oldXTranslate;

		posRef.current.sliderDragAnimationID =
			requestAnimationFrame(sliderDragAnimation);

		posRef.current.oldXTranslate = posRef.current.currXTranslate;
	};

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
				onContextMenu={(event: React.MouseEvent<HTMLDivElement>) => {
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

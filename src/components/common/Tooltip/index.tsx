import { useEffect, useRef } from 'react';
import { CSSProperties, FC, ReactNode } from 'react';

import classes from './index.module.css';

const tooltipStylePosition_Map = {
	topLeft: {
		bottom: '100%',
		right: '100%',
	},
	topCenter: {
		bottom: '100%',
		left: '50%',
		transform: 'translateX(-50%)',
		marginBottom: '0.5em',
	},
	topRight: {
		bottom: '100%',
		left: '100%',
	},
	leftCenter: {
		right: '100%',
		top: '50%',
		transform: 'translateY(-50%)',
		marginRight: '0.5em',
	},
	bottomLeft: {
		top: '100%',
		right: '100%',
	},
	bottomCenter: {
		top: '100%',
		left: '50%',
		transform: 'translateX(-50%)',
		marginTop: '0.5em',
	},
	rightCenter: {
		left: '100%',
		top: '50%',
		transform: 'translateY(-50%)',
		marginLeft: '0.5em',
	},
	bottomRight: {
		top: '100%',
		left: '100%',
	},
};

const tooltipArrowStylePosition_Map = {
	topLeft: {
		visibility: 'hidden',
	},
	topCenter: {
		top: '100%',
		left: '50%',
		transform: 'translateX(-50%)',
		borderColor: 'black transparent transparent transparent',
	},
	topRight: {
		visibility: 'hidden',
	},
	leftCenter: {
		left: '100%',
		top: '50%',
		transform: 'translateY(-50%)',
		borderColor: 'transparent transparent transparent black',
	},
	bottomLeft: {
		visibility: 'hidden',
	},
	bottomCenter: {
		bottom: '100%',
		left: '50%',
		transform: 'translateX(-50%)',
		borderColor: 'transparent transparent black transparent',
	},
	bottomRight: {
		visibility: 'hidden',
	},
	rightCenter: {
		right: '100%',
		top: '50%',
		transform: 'translateY(-50%)',
		borderColor: 'transparent black transparent transparent',
	},
} as {
	[key in keyof typeof tooltipStylePosition_Map]: CSSProperties | undefined;
};

interface IProps {
	children: ReactNode;
	position?: keyof typeof tooltipStylePosition_Map;
	content: ReactNode | number | string;
	windowCollision?: boolean;
	isVisible?: boolean;
	transform?: {
		opacity?: {
			duration?: string;
			delay?: string;
		};
	};
}

const Tooltip: FC<IProps> = ({
	children,
	position = 'topCenter',
	content,
	windowCollision,
	isVisible,
	transform,
}) => {
	const tooltipRef = useRef<HTMLDivElement>(null);
	const varsRef = useRef<{
		delay: number;
		contentContainer: {
			mouse: {
				enter: boolean;
				leave: boolean;
			};
		};
		tooltip: {
			mouse: {
				enter: boolean;
				leave: boolean;
			};
		};
		// setTimeoutId: {
		// 	[key: string]: NodeJS.Timeout;
		// };
	}>({
		delay: 100,
		contentContainer: {
			mouse: {
				enter: false,
				leave: false,
			},
		},
		tooltip: {
			mouse: {
				enter: false,
				leave: false,
			},
		},
	});

	const handleWindowCollision = () => {
		if (!tooltipRef.current) return;

		const tooltipComputedStyles = getComputedStyle(tooltipRef.current);
		const tooltipMatrix =
			tooltipComputedStyles.transform || tooltipComputedStyles.webkitTransform;
		// || tooltipComputedStyles.mozTransform;
		const tooltipMatrixArr = tooltipMatrix
			.slice(7, tooltipMatrix.length - 1)
			.split(',');

		const tooltipBoundingClientRect =
			tooltipRef.current.getBoundingClientRect();

		const tooltipX1 = tooltipBoundingClientRect.x;
		const tooltipX2 = tooltipX1 + tooltipBoundingClientRect.width;
		const tooltipY1 = tooltipBoundingClientRect.y;
		const tooltipY2 = tooltipY1 + tooltipBoundingClientRect.height;

		const transformArr: string[] = [];

		if (tooltipX1 < 0) {
			if (tooltipMatrix !== 'none') {
				tooltipMatrixArr[tooltipMatrixArr.length - 2] = (
					parseFloat(tooltipMatrixArr[tooltipMatrixArr.length - 2]) + -tooltipX1
				).toString();
			} else {
				transformArr.push(`translateX(${tooltipX1}px)`);
			}
		} else if (tooltipX2 > window.innerWidth) {
			if (tooltipMatrix !== 'none') {
				tooltipMatrixArr[tooltipMatrixArr.length - 2] = (
					parseFloat(tooltipMatrixArr[tooltipMatrixArr.length - 2]) -
					(tooltipX2 - window.innerWidth)
				).toString();
			} else {
				transformArr.push(`translateX(${tooltipX1}px)`);
			}
		}

		if (tooltipY1 < 0) {
			if (tooltipMatrix !== 'none') {
				tooltipMatrixArr[tooltipMatrixArr.length - 1] = (
					parseFloat(tooltipMatrixArr[tooltipMatrixArr.length - 1]) - tooltipY1
				).toString();
			} else {
				transformArr.push(`translateY(${-tooltipY1}px)`);
			}
		} else if (tooltipY2 > window.innerHeight) {
			if (tooltipMatrix !== 'none') {
				tooltipMatrixArr[tooltipMatrixArr.length - 1] = (
					parseFloat(tooltipMatrixArr[tooltipMatrixArr.length - 1]) -
					(tooltipY2 - window.innerHeight)
				).toString();
			} else {
				transformArr.push(`translateY(${-tooltipX1}px)`);
			}
		}

		if (tooltipMatrix !== 'none') {
			tooltipRef.current.style.transform = `matrix(${tooltipMatrixArr.join(
				','
			)})`;
		} else {
			tooltipRef.current.style.transform = transformArr.join(' ');
		}
	};

	const handleContentContainerMouseEnter =
		(/*event: MouseEvent<HTMLDivElement>*/) => {
			if (!tooltipRef.current || !varsRef.current) return;
			tooltipRef.current.classList.add(classes.isVisible);
			varsRef.current.contentContainer.mouse.enter = true;
			varsRef.current.contentContainer.mouse.leave = false;
			tooltipRef.current.style.pointerEvents = 'auto';

			if (windowCollision) return handleWindowCollision();
		};

	const handleContentContainerMouseLeave = () => {
		if (!tooltipRef.current || !varsRef.current) return;
		tooltipRef.current.classList.remove(classes.isVisible);
		varsRef.current.contentContainer.mouse.enter = false;
		varsRef.current.contentContainer.mouse.leave = true;
	};

	useEffect(() => {
		if (typeof isVisible !== 'boolean') return;

		if (isVisible) handleWindowCollision();
	}, [isVisible]);

	useEffect(() => {
		if (tooltipRef.current) {
			if (transform?.opacity?.duration)
				tooltipRef.current.style.setProperty(
					'--tooltip-opacity-transform-duration',
					transform.opacity.duration
				);
			if (transform?.opacity?.delay)
				tooltipRef.current.style.setProperty(
					'--tooltip-opacity-transform-delay',
					transform.opacity.delay
				);
		}
		return () => {
			varsRef.current = {
				delay: 100,
				contentContainer: {
					mouse: {
						enter: false,
						leave: false,
					},
				},
				tooltip: {
					mouse: {
						enter: false,
						leave: false,
					},
				},
			};
		};
	}, [transform?.opacity?.delay, transform?.opacity?.duration]);

	return (
		<div className={classes.contentContainer}>
			<div
				onMouseEnter={() =>
					typeof isVisible !== 'boolean' && handleContentContainerMouseEnter()
				}
				onMouseLeave={() =>
					typeof isVisible !== 'boolean' && handleContentContainerMouseLeave()
				}
				aria-describedby={classes.tooltip}
			>
				{children}
			</div>

			<div
				ref={tooltipRef}
				role='tooltip'
				className={`${classes.tooltip} ${isVisible ? classes.isVisible : ''}`}
				id={classes.tooltip}
				style={tooltipStylePosition_Map[position]}
				onMouseEnter={() => {
					if (typeof isVisible === 'boolean' || !tooltipRef.current) return;

					if (varsRef.current.contentContainer.mouse.leave)
						tooltipRef.current.classList.add(classes.isVisible);
					else return tooltipRef.current.classList.remove(classes.isVisible);

					// if (
					// 	(typeof isVisible === 'boolean' && !isVisible) ||
					// 	typeof isVisible !== 'boolean'
					// ) {
					varsRef.current.tooltip.mouse.enter = true;
					varsRef.current.tooltip.mouse.leave = false;
					// }
				}}
				onMouseLeave={() => {
					if (typeof isVisible === 'boolean' || !tooltipRef.current) return;

					if (varsRef.current.contentContainer.mouse.enter)
						tooltipRef.current.classList.add(classes.isVisible);
					else tooltipRef.current.classList.remove(classes.isVisible);

					// if (
					// 	(typeof isVisible === 'boolean' && isVisible) ||
					// 	typeof isVisible !== 'boolean'
					// ) {
					varsRef.current.tooltip.mouse.enter = false;
					varsRef.current.tooltip.mouse.leave = true;
					// }
				}}
				onTransitionEnd={() => {
					if (typeof isVisible === 'boolean' || !tooltipRef.current) return;

					if (
						varsRef.current.contentContainer.mouse.leave &&
						!varsRef.current.tooltip.mouse.enter
					) {
						tooltipRef.current.style.pointerEvents = 'none';
						varsRef.current.contentContainer.mouse.enter = false;
						varsRef.current.contentContainer.mouse.leave = false;
					}
				}}
			>
				<div className={classes.tooltipContentAndArrowContainer}>
					{content}
					<div
						className={classes.tooltipArrow}
						style={tooltipArrowStylePosition_Map[position]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tooltip;

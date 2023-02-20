// import { useCallback, useEffect, useRef, useState } from 'react';
// import { useSharedMainState } from '..';
// import { setDynamicallyImportedLibs } from '../actions';

export const useDynamicallyImportedGSAP = () => {
	// const [
	// 	{
	// 		dynamicallyImportedLibs: { gsap },
	// 	},
	// 	dispatch,
	// ] = useSharedMainState();
	// const [fetchCounter, setfetchCounter] = useState(0);
	// const config = useRef<{
	// 	fetch: boolean;
	// 	intervalId?: NodeJS.Timer;
	// }>({
	// 	fetch: true,
	// });

	// const dynamicallyImportLib = useCallback(() => {
	// 	if (config.current.fetch && !gsap) {
	// 		config.current.fetch = false;
	// 		return (async () => await import('gsap'))().then(({ default: gsap }) => {
	// 			setDynamicallyImportedLibs(dispatch, { gsap });
	// 			clearInterval(config.current.intervalId);
	// 			return gsap;
	// 		});
	// 	}
	// }, [dispatch, gsap]);

	// useEffect(() => {
	// 	config.current.intervalId = setInterval(() => {
	// 		dynamicallyImportLib()?.catch((err) => {
	// 			err instanceof Error ? console.error(err.message) : console.error(err);
	// 			config.current.fetch = true;
	// 		});

	// 		return () => clearInterval(config.current.intervalId);
	// 	}, 300);
	// }, [dispatch, dynamicallyImportLib]);

	return {
		/* gsap */
	};
};

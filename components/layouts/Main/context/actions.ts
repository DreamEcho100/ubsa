import { Dispatch } from 'react';
import { EMainContextConsts } from './constants';
import {
	IInitialState,
	IReducerActions,
	ISetDynamicallyImportedLibs,
} from './ts';

export const setThemeMode = (
	dispatch: Dispatch<IReducerActions>,
	currentThemeMode: IInitialState['currentThemeMode']
) => {
	dispatch({
		type: EMainContextConsts.SET_CURRENT_THEME_MODE,
		payload: {
			currentThemeMode,
		},
	});

	if (localStorage.getItem('currentThemeMode') !== currentThemeMode)
		localStorage.setItem('currentThemeMode', currentThemeMode);

	const currentMetaColorScheme = document.querySelector(
		'meta[name=color-scheme]'
	);
	if (currentMetaColorScheme) {
		currentMetaColorScheme.setAttribute('content', currentThemeMode);
	} else {
		const newMetaColorScheme = document.createElement('meta');

		newMetaColorScheme.name = 'color-scheme';

		newMetaColorScheme.content = currentThemeMode;

		document.head.appendChild(newMetaColorScheme);
	}

	if (currentThemeMode === 'dark') {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
	} else {
		document.body.classList.add('light');
		document.body.classList.remove('dark');
	}
};

export const setCurrentBgColorMode = (
	dispatch: Dispatch<IReducerActions>,
	currentBgColorMode: IInitialState['currentBgColorMode']
) => {
	dispatch({
		type: EMainContextConsts.SET_CURRENT_COLOR_MODE,
		payload: {
			currentBgColorMode,
		},
	});

	if (localStorage.getItem('currentBgColorMode') !== currentBgColorMode)
		localStorage.setItem('currentBgColorMode', currentBgColorMode);
};

export const setCurrentFontColorMode = (
	dispatch: Dispatch<IReducerActions>,
	currentFontColorMode: IInitialState['currentFontColorMode']
) => {
	dispatch({
		type: EMainContextConsts.SET_CURRENT_COLOR_MODE,
		payload: {
			currentFontColorMode,
		},
	});

	if (localStorage.getItem('currentFontColorMode') !== currentFontColorMode)
		localStorage.setItem('currentFontColorMode', currentFontColorMode);
};

export const setThemeSettings = (
	dispatch: Dispatch<IReducerActions>,
	themeSettings: IInitialState['themeSettings']
) => {
	dispatch({
		type: EMainContextConsts.SET_THEME_SETTINGS,
		payload: {
			themeSettings,
		},
	});
};

export const setIsMobileOrTablet = (
	dispatch: Dispatch<IReducerActions>,
	isMobileOrTablet: IInitialState['isMobileOrTablet']
) => {
	dispatch({
		type: EMainContextConsts.SET_IS_MOBILE_OR_TABLET,
		payload: {
			isMobileOrTablet,
		},
	});
};

export const setDynamicallyImportedLibs = (
	dispatch: Dispatch<IReducerActions>,
	libState: ISetDynamicallyImportedLibs['payload']
) => {
	dispatch({
		type: EMainContextConsts.SET_DYNAMICALLY_IMPORTED_LIB,
		payload: libState,
	});
};

// export const setScreenSize = (
// 	dispatch: Dispatch<IReducerActions>,
// 	screenSize: TInitialStateScreenSize
// ) => {
// 	dispatch({
// 		type: EMainContextConsts.SET_SCREEN_SIZE,
// 		payload: {
// 			screenSize,
// 		},
// 	});
// };

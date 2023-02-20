// import { default as gsap } from 'gsap';
import { EMainContextConsts } from './constants';

// export type TInitialStateScreenSize = number;

export interface IInitialState {
	currentBgColorMode: string;
	currentFontColorMode: string;
	currentThemeMode: 'light' | 'dark';
	themeSettings: boolean;
	isMobileOrTablet: boolean;
	dynamicallyImportedLibs: {
		// gsap?: typeof gsap;
	};
}

interface ISetReducerAction<Type, Payload = undefined> {
	type: Type;
	payload: Payload;
}
// type TSetScreenSize = ISetReducerAction<
// 	EMainContextConsts.SET_SCREEN_SIZE,
// 	{
// 		screenSize: number;
// 	}
// >;

type TSetCurrentBgColorMode = ISetReducerAction<
	EMainContextConsts.SET_CURRENT_COLOR_MODE,
	{
		currentBgColorMode: string;
	}
>;

type TSetCurrentFontColorMode = ISetReducerAction<
	EMainContextConsts.SET_CURRENT_COLOR_MODE,
	{
		currentFontColorMode: string;
	}
>;
type TSetCurrentThemeMode = ISetReducerAction<
	EMainContextConsts.SET_CURRENT_THEME_MODE,
	{
		currentThemeMode: IInitialState['currentThemeMode'];
	}
>;
type TSetThemeSettings = ISetReducerAction<
	EMainContextConsts.SET_THEME_SETTINGS,
	{
		themeSettings: boolean;
	}
>;
type TSetIsMobileOrTablet = ISetReducerAction<
	EMainContextConsts.SET_IS_MOBILE_OR_TABLET,
	{
		isMobileOrTablet: boolean;
	}
>;
export interface ISetDynamicallyImportedLibs
	extends ISetReducerAction<
		EMainContextConsts.SET_DYNAMICALLY_IMPORTED_LIB,
		{
			[key in keyof IInitialState['dynamicallyImportedLibs']]: IInitialState['dynamicallyImportedLibs'][key];
		}
	> {}

export type IReducerActions =
	// | TSetScreenSize
	| TSetCurrentBgColorMode
	| TSetCurrentFontColorMode
	| TSetCurrentThemeMode
	| TSetThemeSettings
	| TSetIsMobileOrTablet
	| ISetDynamicallyImportedLibs;

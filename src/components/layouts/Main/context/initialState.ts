import { IInitialState } from './ts';

export const initialState: IInitialState = {
	currentBgColorMode: '#374151',
	currentFontColorMode: '#f1f1f1',
	currentThemeMode: 'dark',
	themeSettings: false,
	// screenSize: number,
	isMobileOrTablet: false,
	dynamicallyImportedLibs: {
		gsap: undefined,
	},
};

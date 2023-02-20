import { useEffect } from 'react';
import { isMobileOrTablet } from '~//utils/device';
import { SharedMainStateProvider, useSharedMainState } from './context';
import {
	setCurrentBgColorMode,
	setCurrentFontColorMode,
	setIsMobileOrTablet,
	setThemeMode,
} from './context/actions';
import CommonLayout from '../Common';
// import { IInitialState } from './context/ts';

interface IProps {
	children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
	const [, dispatch] = useSharedMainState();

	useEffect(() => {
		const lsBgColorMode = localStorage.getItem('currentBgColorMode');
		const lsFontColorMode = localStorage.getItem('currentFontColorMode');
		const lsThemeMode = localStorage.getItem('currentThemeMode');

		if (lsBgColorMode) setCurrentBgColorMode(dispatch, lsBgColorMode);
		if (lsFontColorMode) setCurrentFontColorMode(dispatch, lsFontColorMode);
		if (lsThemeMode && (lsThemeMode == 'light' || lsThemeMode == 'dark'))
			setThemeMode(dispatch, 'light'); // lsThemeMode
		else setThemeMode(dispatch, 'dark');
		setIsMobileOrTablet(dispatch, isMobileOrTablet());
	}, [dispatch]);

	return (
		<CommonLayout>
			<main className='min-full-content-page text-[1.25rem] leading-relaxed'>
				{children}
			</main>
		</CommonLayout>);
};

const MainLayout = ({ children }: IProps) => {
	return (
		<SharedMainStateProvider>
			<Layout>{children}</Layout>
		</SharedMainStateProvider>
	);
};

export default MainLayout;

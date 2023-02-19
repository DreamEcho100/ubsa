import type { ReactNode } from 'react';
import MainFooter from './Footer';
import MainHeader from './Header';

const CommonLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<MainHeader />
			{children}
			<MainFooter />
		</>
	);
};

export default CommonLayout;

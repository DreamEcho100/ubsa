import MainFooter from './Footer';
import MainHeader from './Header';

const CommonLayout = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<>
			<MainHeader />
			{children}
			<MainFooter />
		</>
	);
};

export default CommonLayout;

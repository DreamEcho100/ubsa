import CommonLayout from '@components/layouts/Common';
import ShowCaseAndNewsSections from './components/sections/ShowCaseAndNews';
import AllServicesSections from './components/sections/AllServices';
import UniqueBusinessSolutionsSection from './components/sections/UniqueBusinessSolutions';

const HomeScreen = () => {
	return (
		<CommonLayout>
			<main className='leading-relaxed min-full-content-page mt-main-nav-page'>
				<UniqueBusinessSolutionsSection />
				<AllServicesSections />
				<ShowCaseAndNewsSections />
			</main>
		</CommonLayout>
	);
};

export default HomeScreen;

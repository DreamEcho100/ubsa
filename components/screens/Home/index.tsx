import CommonLayout from '@components/layouts/Common';
import ShowCaseAndNewsSections from './components/sections/ShowCaseAndNews';
// import AllServicesSections from './components/sections/AllServices';
import UniqueBusinessSolutionsSection from './components/sections/UniqueBusinessSolutions';
import ShowcaseSection from './components/sections/Showcase';
import ReviewsSlider from './components/sections/ReviewsSlider';

const HomeScreen = () => {
	return (
		<CommonLayout>
			<main className='min-full-content-page text-[1.25rem] leading-relaxed'>
				{/* mt-main-nav-page */}
				<UniqueBusinessSolutionsSection />
				<ShowcaseSection />
				<ReviewsSlider />
				{/* <AllServicesSections /> */}
				<ShowCaseAndNewsSections />
			</main>
		</CommonLayout>
	);
};

export default HomeScreen;

// import AllServicesSections from './components/sections/AllServices';
import CommonLayout from '@components/layouts/Common';
import ReviewsSlider from './components/sections/ReviewsSlider';
import ShowcaseSection from './components/sections/Showcase';
import ShowCaseAndNewsSections from './components/sections/ShowCaseAndNews';
import UniqueBusinessSolutionsSection from './components/sections/UniqueBusinessSolutions';

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

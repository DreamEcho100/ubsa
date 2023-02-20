// import AllServicesSections from './components/sections/AllServices';
import CommonLayout from '~//components/layouts/Common';
// import ReviewsSlider from './components/sections/ReviewsSlider';
import ShowcaseSection from './components/sections/Showcase';
import ShowCaseAndNewsSections from './components/sections/ShowCaseAndNews';
import UniqueBusinessSolutionsSection from './components/sections/UniqueBusinessSolutions';

const HomeScreen = () => {
	return (
		<>
			{/* mt-main-nav-page */}
			<UniqueBusinessSolutionsSection />
			<ShowcaseSection />
			{/* <ReviewsSlider /> */}
			{/* <AllServicesSections /> */}
			<ShowCaseAndNewsSections />
		</>
	);
};

export default HomeScreen;

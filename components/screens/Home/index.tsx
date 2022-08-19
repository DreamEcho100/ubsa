import CommonLayout from '@components/layouts/Common';
import ShowCaseAndNewsSections from './components/sections';
import AllServicesSections from './components/sections/AllServices';
import WebsiteAppsDesignSection from './components/sections/WebsiteAppsDesign';

const HomeScreen = () => {
	return (
		<CommonLayout>
			<main className='leading-relaxed min-full-content-page mt-main-nav-page'>
				<WebsiteAppsDesignSection />
				<AllServicesSections />
				<ShowCaseAndNewsSections />
			</main>
		</CommonLayout>
	);
};

export default HomeScreen;

/** @type {import('next').NextConfig} */

const nextConfig = () => {
	let env = {};

	return {
		reactStrictMode: true,
		swcMinify: true,
		env,
		experimental: {
			typedRoutes: true
		}
	};
};

module.exports = nextConfig();

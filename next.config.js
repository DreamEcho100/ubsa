/** @type {import('next').NextConfig} */

const nextConfig = () => {
	let env = {};

	// if (process.env.NODE_ENV === 'development') {
	// 	env = {
	// 		...env,
	// 		DATABASE_URL: process.env.DATABASE_URL_DEVELOPMENT,
	// 	};
	// } else {
	// 	// env = {
	// 	// 	...env,
	// 	// 	DATABASE_URL: process.env.DATABASE_URL_PRODUCTION,
	// 	// };
	// }

	return {
		reactStrictMode: true,
		swcMinify: true,
		env,
	};
};

module.exports = nextConfig();

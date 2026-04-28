/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	compiler: {
		// Automatically strip console.log/info/warn in production to keep the client bundle clean
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
					exclude: ["error"],
				}
				: false,
	},
}

export default nextConfig
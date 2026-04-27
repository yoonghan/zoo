/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
})

const config = {
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transformIgnorePatterns: ["/node_modules/(?!react-ga4/)/"],
	coverageReporters: ["text", "cobertura", "lcov"],
	testEnvironment: "@happy-dom/jest-environment",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testPathIgnorePatterns: [
		"/e2e/*",
		"/playwright*",
		"/src/app/[lng]/layout.tsx",
	],
	coveragePathIgnorePatterns: [
		"layout.tsx",
		"/node_modules/",
		"/src/i18n/locales/[a-z]+/.*",
	],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const asyncConfig = createJestConfig(config)

const result = async () => {
	const config = await asyncConfig()
	config.transformIgnorePatterns = [
		"/node_modules/(?!(react-ga4|geist)/)(?!.pnpm)",
	]
	return config
}

export default result
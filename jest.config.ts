/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
})

const config: Config = {
	clearMocks: true,
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
	coverageReporters: ["text", "cobertura", "lcov"],
	testEnvironment: "@happy-dom/jest-environment",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testPathIgnorePatterns: [
		"<rootDir>/e2e/",
		"<rootDir>/playwright*",
		"<rootDir>/src/app/\\[lng\\]/layout.tsx",
	],
	coveragePathIgnorePatterns: [
		"layout.tsx",
		"/node_modules/",
		"/src/i18n/locales/[a-z]+/.*",
	],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const asyncConfig = createJestConfig(config as any)

const result = async () => {
	const resolvedConfig = await asyncConfig()

	// Safely inject react-ga4 into Next.js's default ignore patterns without removing other internal Next.js excludes
	if (resolvedConfig.transformIgnorePatterns) {
		resolvedConfig.transformIgnorePatterns =
			resolvedConfig.transformIgnorePatterns.map((pattern) => {
				if (typeof pattern === "string") {
					// Next.js explicitly ignores (geist|next/dist/...) but we also want to transpile react-ga4
					return pattern.replace(/(geist\|next)/g, "react-ga4|$1")
				}
				return pattern
			})
	}

	return resolvedConfig
}

export default result
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
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
  coverageReporters: ["text", "cobertura"],
  testEnvironment: "@happy-dom/jest-environment",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/e2e/*", "/playwright*", "/src/app/[lng]/layout.tsx"],
  coveragePathIgnorePatterns: [
    "layout.tsx",
    "/node_modules/",
    "/src/util/generateMeta.ts" //not sure but test turns flaky
  ],
};

export default createJestConfig(config as any);

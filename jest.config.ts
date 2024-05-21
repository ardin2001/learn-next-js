import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/utils/**",
    "!<rootDir>/src/types/**",
    "!<rootDir>/src/pages/api/**",
    "!<rootDir>/src/middleware.ts",
    "!<rootDir>/src/middlewares/**",
    "!<rootDir>/src/pages/_app.tsx",
    "!<rootDir>/src/pages/_document.tsx",
  ],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);

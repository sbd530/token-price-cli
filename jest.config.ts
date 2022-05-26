import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'js'],
    verbose: true,
    preset: 'ts-jest',
    moduleNameMapper: {
      '^@App/(.*)$': '<rootDir>/src/$1',
      '^lib/(.*)$': '<rootDir>/common/$1'
    },
    testRegex: "((\\.|/*.)(test|spec))\\.ts?$",
  }
}

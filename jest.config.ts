import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    collectCoverage: true,
    verbose: true,
    preset: 'ts-jest',
    testRegex: "((\\.|/*.)(test|spec))\\.ts?$",
  }
}

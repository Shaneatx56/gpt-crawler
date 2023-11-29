import { Config } from "../src/config";

export const defaultConfig: Config = {
  url: "https://www.copy.ai/",
  match: "https://www.copy.ai/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};


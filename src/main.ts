import { defaultConfig } from "../.github/config.js";
import { crawl, write } from "./core.js";

await crawl(defaultConfig);
await write(defaultConfig);

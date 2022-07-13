import { sum } from "../lib";
import * as sayHi from "./commands/say-hi";

sayHi.handler("Someone");
console.log(sum(1, 2));

export {};

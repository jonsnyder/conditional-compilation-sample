import moduleA from "./a";
import moduleB from "./b";

const modules = [];
if (process.env.INCLUDE_MODULE_A === "true") {
    modules.push(moduleA);
}
if (process.env.INCLUDE_MODULE_B === "true") {
    modules.push(moduleB);
}

console.log(JSON.stringify(modules, null, 2));

import replace from "@rollup/plugin-replace";

const replacements = Object.keys(process.env)
  .filter(key => key.startsWith("INCLUDE_MODULE_"))
  .reduce((memo, key) => {
    memo[`process.env.${key}`] = JSON.stringify(process.env[key]);
    return memo;
  }, {});

export default {
    plugins: [
	replace({
	  ...replacements,
	  preventAssignment: true
	})
    ],
    input: "src/index.js",
    output: {
	file: "bundle.js",
	format: "iife"
    }
};

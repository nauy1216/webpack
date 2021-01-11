const path = require("path")
module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: {
		app: "./example.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "vendor.js",
		module: true
	},
	optimization: {
		usedExports: true,
		concatenateModules: true
	},
	experiments: {
		outputModule: true
	}
};

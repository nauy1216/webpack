const cp = require("child_process");
const path = require("path")

cp.exec(`node ${path.resolve(__dirname, "../../bin/webpack.js")} --config ./webpack.config.js`, (error, stdout, stderr) => {
	if (stderr)
		console.log(stderr);
	if (error !== null)
		console.log(error);
});

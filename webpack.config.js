module.exports = {
	mode: "development",
	target: "node",
	devtool: false,
	output: {
		filename: "index.js",
	},
	externals: [
		(context, request, callback) => {
			if (request.includes("node_modules")) {
				callback(null, `commonjs ${request}`);
				return;
			}
			callback();
		},
	],
};

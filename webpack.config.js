// module.exports = {
// 	entry: ['./src/index.tsx'],
// 	module: {
// 		rules: [
// 			{
// 				test: /\.tsx?$/,
// 				use: 'ts-loader',
// 				exclude: /node_modules/,
// 			},
// 			{
// 				test: /\.scss$/,
// 				use: [
// 					'style-loader', // creates style nodes from JS strings
// 					'css-loader', // translates CSS into CommonJS
// 					'sass-loader', // compiles Sass to CSS, using Node Sass by default
// 				],
// 				exclude: /node_modules/,
// 			},
// 		],
// 	},
// 	resolve: {
// 		extensions: ['.tsx', '.ts', '.js'],
// 	},
// 	output: {
// 		path: __dirname + '/dist',
// 		publicPath: '/',
// 		filename: 'bundle.js',
// 	},
// 	devServer: {
// 		contentBase: './dist',
// 	},
// };


module.exports = {
	entry: './src/Main.js',
	output: {
		filename: './dist/app.js'
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': __dirname + '/src'
		}
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
}

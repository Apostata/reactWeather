var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx',
	],

	externals:{
		jquery:'jQuery'
	},

	output: {
	    path: __dirname,
	    filename: './public/bundle.js'
	},

	resolve: {
	    root: __dirname,
	    alias: {
	      	Main: 'app/components/Main.jsx',
	      	Nav: 'app/components/Nav.jsx',
	    	About: 'app/components/About.jsx',
	    	Examples: 'app/components/Examples.jsx',
	    	Weather: 'app/components/Weather.jsx',  
	    	WeatherForm: 'app/components/WeatherForm.jsx',
	    	WeatherMessage: 'app/components/WeatherMessage.jsx',
	    	ErrorModal: 'app/components/ErrorModal.jsx',
	    	openWeatherMap: 'app/api/openWeatherMap.jsx' 
	    },
	    extensions: ['', '.js', '.jsx']
	},

  	module: {
	    loaders: [
	      {
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015', 'stage-0']
	        },
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/
	      }
	    ]
  	},
  	devtool: 'cheap-module-eval-source-map',
  	//devtool: 'cheap-module-eval',

	plugins: [
	  // Minify assets.
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false // https://github.com/webpack/webpack/issues/1496
		    }
		}),*/
		new webpack.ProvidePlugin({
			"$": 'jqeury',
			"jQuery": 'jquery'
		}),

		/*new webpack.DefinePlugin({
	    	'process.env': {
		      'NODE_ENV': JSON.stringify('production')
		    }
	  	})*/
	]
};

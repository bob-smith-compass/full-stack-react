const path = require('path');

module.exports = {
    "mode": "development",
    "entry": path.resolve(__dirname, `src`, `app`),
    "output": {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: `/`
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: "./public",
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["stage-0", "react"],
                        plugins: []
                    }
                }
            }
        ]
    }
}
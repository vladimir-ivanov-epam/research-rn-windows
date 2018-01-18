module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!react-native-table-component)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'es2017', 'stage-0']
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'react-native-web-image-loader?name=[hash].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        }
    }
};

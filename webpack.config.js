const path = require('path')

module.exports = {
    name: 'reactmain-config',
    entry: {
        reactmain: './reactmain/src/react/index.js',
    },
    output: {
        path: path.resolve('./reactmain/static/reactmain/'),
        filename: 'index-bundle.js',
        publicPath: 'static/reactmain/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|gif)$/,
                exclude: /(node_modules)/,
                loader: 'file-loader',
            },  
        ],
    },
}
var config = {
    entry :{
        main : './main.jsx'
    },

    output: {
        path: '/home/smirk/Learning/React-Props-Demo/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
module.exports = config;
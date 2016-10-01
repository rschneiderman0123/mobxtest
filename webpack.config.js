var path = require("path");

module.exports = {
     entry: {
        app: ["./src/app.js"]
     }, 
     output: {
         path: path.resolve(__dirname, "dist"),
         filename: 'app.bundle.js',
         publicPath: "/dist/",
     },
     module: {
         loaders: [{
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react','es2015']
             }
         }]
     },
     devServer: {
        inline : true,
        port : 3033
     }
 }
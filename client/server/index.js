import express from 'express';
import webpack from 'webpack';

const port = process.env.PORT || 8082;
const app = express();

const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Redux Server is listening on port ${port}.`);
});


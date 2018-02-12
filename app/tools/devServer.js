import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import server from './server';  
import favicon from 'serve-favicon';

/* eslint-disable no-console */

const app = express();  
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

app.use(express.static('public')); 

server(app);

//fallback HTML5 history style
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


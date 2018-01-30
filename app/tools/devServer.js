import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import server from './server';  
import favicon from 'serve-favicon';

const ROOMS = [
  {
    id: 123,
    title: "Sarlanga 1",
    description: "Programing!"
  },
  {
    id: 5122,
    title: "Sarlang 2",
    description: "Moar Programing!"
  },
  {
    id: 34,
    title: "Sarlanga 3",
    description: "Do stuff!"
  }
];

/* eslint-disable no-console */

const app = express();  
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

app.get('/api/rooms', function(req, res) {
  res.json(ROOMS);
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

server(app);

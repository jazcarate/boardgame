import express from 'express';  
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';  
import server from './server'; 

/*eslint-disable no-console */

const app = express();

app.use(compression());  
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(express.static('public')); 

server(app);

app.get('*', function(req, res) {  
  res.sendFile(path.join(__dirname, '../build/index.html'));
});



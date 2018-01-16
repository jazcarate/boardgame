import express from 'express';  
import path from 'path';
import compression from 'compression';  
import server from './server'; 

/*eslint-disable no-console */

const app = express();

app.use(compression());  
app.use(express.static('build'));  

app.get('*', function(req, res) {  
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


server(app);

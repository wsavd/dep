import express from 'express';
const app = express();

import bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

import cors from 'cors'
app.use(cors());

//db
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
app.set('database', (process.env.MONGODB_URI || 'mongodb://admin:admin@ds062339.mlab.com:62339/piperdb'));
//const uri = 'localhost/books';
mongoose.connect(app.get('database'))
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

import cardRoutes from './routes/card.routes';
import columnRoutes from './routes/column.routes';
import boardRoutes from './routes/board.routes';
app.use('/api/v1', cardRoutes);
app.use('/api/v1', columnRoutes);
app.use('/api/v1', boardRoutes);

import path from 'path'
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function(req, res, next){
    res.render('index');
});

app.set('port', (process.env.PORT || 3005))
app.listen(app.get('port'), () => {
  console.log("Node app is runningat localhost:" + app.get('port'))
})

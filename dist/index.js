'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _card = require('./routes/card.routes');

var _card2 = _interopRequireDefault(_card);

var _column = require('./routes/column.routes');

var _column2 = _interopRequireDefault(_column);

var _board = require('./routes/board.routes');

var _board2 = _interopRequireDefault(_board);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

app.use((0, _cors2.default)());

//db

_mongoose2.default.Promise = global.Promise;
app.set('database', process.env.MONGODB_URI || 'mongodb://admin:admin@ds062339.mlab.com:62339/piperdb');
//const uri = 'localhost/books';
_mongoose2.default.connect(app.get('database')).then(function () {
  return console.log('connection succesful');
}).catch(function (err) {
  return console.error(err);
});

app.use('/api/v1', _card2.default);
app.use('/api/v1', _column2.default);
app.use('/api/v1', _board2.default);

app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', function (req, res, next) {
  res.render('index');
});

app.set('port', process.env.PORT || 3005);
app.listen(app.get('port'), function () {
  console.log("Node app is runningat localhost:" + app.get('port'));
});
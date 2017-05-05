import Board from '../models/board.model';
import Column from '../models/column.model'
function read(req, res) {
  Board.find()
    .then(results => res.json(results))
}

function create(req, res) {
  const board = new Board({
    title: req.body.title
  });
  board.save()
    .then(savedBoard => res.json(savedBoard))
}

function readSingle(req, res) {
    Board.findOne({_id: req.params.id})
      .then(results => res.json(results))
};

function update(req, res) {
	let body = req.body;
    Board.update({_id: req.params.id}, {$set:body})
      .then(results => res.json(results))
      .catch(e => next(e));
};

function remove(req, res) {
    let query = {_id: [req.params.id]};
	Board.remove(query)
      .then(deleted => res.json(deleted))
      .catch(e => next(e));
};

function columnsOfBoard(req, res) {
    Board.findById({_id: req.params.id}, function(err, board) {
        if (err) {
            res.json({info: 'error during find board', error: err});
        };
        if (board) {
            Column.find({boardId: req.params.id}, function (err, columns) {
                res.json(columns);    
            })
        } else {
            res.json({info: 'board not found'});
        }
    });
};

export default {read, readSingle, create, update, remove, columnsOfBoard}
import Column from '../models/column.model';
import Card from '../models/card.model'

function read(req, res) {
  Column.find()
    .then(results => res.json(results))
}

function create(req, res) {
  const column = new Column({
    title: req.body.title,
    boardId: req.body.boardId
  });
  column.save()
    .then(savedColumn => res.json(savedColumn))
}

function readSingle(req, res) {
    Column.findOne({_id: req.params.id})
      .then(results => res.json(results))
};

function update(req, res) {
	let body = req.body;
    Column.update({_id: req.params.id}, {$set:body})
      .then(results => res.json(results))
      .catch(e => next(e));
};

function remove(req, res) {
    let query = {_id: [req.params.id]};
	Column.remove(query)
      .then(deleted => res.json(deleted))
      .catch(e => next(e));
};
function cardsOfColumns(req,res) {
        Column.findById(req.params.id, function(err, column) {
            if (err) {
                res.json({info: 'error during find column', error: err});
            };
            if (column) {
                Card.find({columnId: req.params.id}).exec(function (err, cards){
                    res.json(cards);
                });
            } else {
                res.json({info: 'column not found'});
            }
        });
}

export default {read, readSingle, create, update, remove, cardsOfColumns}
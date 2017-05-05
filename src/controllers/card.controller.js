import Card from '../models/card.model';

function read(req, res) {
  Card.find()
    .then(results => res.json(results))
}

function create(req, res) {
  const card = new Card({
    title: req.body.title,
    text: req.body.text,
    manager: req.body.manager,
    developer: req.body.developer,
    boardId: req.body.boardId,
    columnId: req.body.columnId
  });
  card.save()
    .then(savedCard => res.json(savedCard))
}

function readSingle(req, res) {
    Card.findOne({_id: req.params.id})
      .then(results => res.json(results))
};

function update(req, res) {
	let body = req.body;
    Card.update({_id: req.params.id}, {$set:body})
      .then(results => res.json(results))
      .catch(e => next(e));
};

function remove(req, res) {
    let query = {_id: [req.params.id]};
	Card.remove(query)
      .then(deleted => res.json(deleted))
      .catch(e => next(e));
};

export default {read, readSingle, create, update, remove}
const routes = require('express').Router();
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

routes.get('/', (req, res) => {
  const results = connect.getCollection().find();

  results.toArray().then((documents) => {
    res.status(200).json(documents);
    console.log('Returned All Contacts');
  });
});

routes.get('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const results = connect.getCollection().find({ _id: contactId });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`);
  });
});

routes.put('/:id', (req, res) => {
  const updateId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const results = connect.getCollection().replaceOne({ _id: updateId}, contact);
  results.then((documents) => {
    res.status(200).json(documents);
  });
  console.log(contact);
});

routes.post('/', (req, res) => {
    const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const results = connect.getCollection().insertOne(contact);
  results.then((documents) => {
    res.status(200).json(documents);
  });
  console.log(contact);
});

routes.delete('/:id', (req, res) => {
  const deleteId = new ObjectId(req.params.id);
  const results = connect.getCollection().deleteOne({ _id: deleteId }, true);

  results.then((documents) => {
    res.status(200).json(documents);
  });
    console.log(`Contact Deleted: ${req.params.id}`);
});

module.exports = routes;

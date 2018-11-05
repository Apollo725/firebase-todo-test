const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const firebaseHelper = require('firebase-functions-helper');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const todoCollection = 'todo_db';
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

exports.webApi = functions.https.onRequest(main);

app.post('/data', (req, res) => {
  firebaseHelper.firestore
      .createNewDocument(db, todoCollection, req.body);
  res.send('Create a new data');
});

app.patch('/data/:id', (req, res) => {
  firebaseHelper.firestore
      .updateDocument(db, todoCollection, req.params.id, req.body);
  res.send('Update a new data');
});

app.get('/data/:id', (req, res) => {
  firebaseHelper.firestore
      .getDocument(db, todoCollection, req.params.id)
      .then(doc => res.status(200).send(doc));
});

app.get('/data', (req, res) => {
  firebaseHelper.firestore
      .backup(db, todoCollection)
      .then(data => res.status(200).send(data))
});

app.delete('/data/:id', (req, res) => {
  firebaseHelper.firestore
      .deleteDocument(db, todoCollection, req.params.id);
  res.send('Document deleted');
});
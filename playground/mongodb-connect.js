//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect');
  }
  // console.log('connect');
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('eneble to insert', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });
  // console.log('connect');
  // db.collection('Users').insertOne({
  //   name: 'keno',
  //   age: 21,
  //   location: 'kawasaki'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('eneble to insert', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });
  db.close();
});

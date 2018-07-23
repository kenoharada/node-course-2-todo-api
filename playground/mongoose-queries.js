const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b548588e5db165209a45159';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}
// Todo.find({
//   _id: id
// }).then((todo) => {
//   console.log('todos', todo);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('todo by id', todo);
}).catch((e)=> console.log(e));

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
//delete all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//delete first
//Todo.findOneAndRemove]

Todo.findByIdAndRemove('id').then((result) => {
  console.log(result);
});

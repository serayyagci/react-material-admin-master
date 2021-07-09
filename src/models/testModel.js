import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  name: String,
  date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) {
      console.log(err)
  }
  // saved!
});

export default SomeModel;
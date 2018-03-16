var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({ 
    name : {type:String},
    description : {type:String},
	amount : {type:Number},
	created : Date,
	updated : Date
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('appSchema', appSchema);

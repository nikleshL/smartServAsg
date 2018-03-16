var appSchema = require("../model/appSchema.js");
var formidable = require('formidable');
var mongoose = require("mongoose");

exports.homepage = function (req, res, next) {
    appSchema.find({},function(err,data){
        var taskData = [];
        if(!err){
            taskData = data;
        }
        res.render('index', { title: 'Expense Management App',data:taskData});
    });
};

exports.addTask = function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
        var allFields = JSON.parse(JSON.stringify(fields));
        console.log("allFields", allFields);
        if(allFields.id && allFields.id!=""){
			var id = allFields.id;
		}else{
			var id = mongoose.Types.ObjectId();
        }
        appSchema.findById(id, function(err, app) {
            if (err || app==null){
				var app = new appSchema();
            }
            app.name = allFields.name;
            app.description = allFields.description;
            app.amount = parseInt(allFields.amount);
            var currentDate = new Date();
            app.updated = currentDate;
            if(!app.created){
                app.created = currentDate;
            }
            app.save(function (err) {
                if (err) {
                    console.log('Unable to add:' + err);
                }
                res.redirect('/');
            });
        });
    });
};

exports.getTask = function(req,res){
    appSchema.findById(req.params.id, function(err, app) {
        if (err)
            res.json({status:'error',data:null}); 
        res.json({status:'success',data:app});     
    });
}

exports.deleteTask = function(req,res){
    appSchema.findByIdAndRemove(req.params.id, function(err, app) {
        if (err) {
            console.log('Unable to delete:' + err);
        }
        res.redirect('/');     
    });
}
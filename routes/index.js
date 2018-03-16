var express = require('express');
var router = express.Router();

var appController = require("../controller/appController");

/* GET home page. */
router.get('/', appController.homepage);
router.post('/addTask', appController.addTask);
router.get('/getTaskData/:id', appController.getTask);
router.get('/deleteTask/:id', appController.deleteTask);

module.exports = router;

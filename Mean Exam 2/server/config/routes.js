var users = require('../controllers/users.js');
var quizzes = require('../controllers/quizzes.js');
var questions = require('../controllers/questions.js');

module.exports = function(app){

	app.get('/users', function(req, res) {
        users.show(req,res);
    });

	app.post('/users/create', function(req, res) {
        users.create(req,res);
    });

    app.get('/users/:id', function(req, res) {
        users.showOne(req,res);
    });

    app.post('/quizzes/create', function(req, res) {
        quizzes.create(req,res);
    });

    app.post('/questions/create', function(req, res) {
        questions.create(req,res);
    });

}
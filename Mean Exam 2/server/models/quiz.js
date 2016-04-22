var mongoose = require('mongoose');

var QuizSchema = new mongoose.Schema({
	question1: [
		{question: String},
		{correct: String},
		{fake1: String},
		{fake2: String}
	],
	question2: [
		{question: String},
		{correct: String},
		{fake1: String},
		{fake2: String}
	],
	question3: [
		{question: String},
		{correct: String},
		{fake1: String},
		{fake2: String}
	]
},{timestamps:true});

var Quizzes = mongoose.model('Quizzes', QuizSchema);
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	weight: Number,
	height: Number,
	age: Number,
	bmi: Number,
	tdee: Number,
	multiplier: Number,
	goal: String,
	target_weight: Number,
	body_fat: Number,
	total_points: Number,
	badges:[
		{
			name: String,
			description: String
		}
	],
	level: Number,
	workouts: [
		{
			id: Number,
			title: String,
			duration: Number,
			exercises: [
				{
					name: String,
					pic_left: String,
					duration: Number,
					distance: Number,
					pace: Number,
					sets: [{reps: Number},{lbs: Number}]
				}
			],
			points: Number,
			createdAt: Date,
			updatedAt: Date
		}
	]
},{timestamps:true});

var Users = mongoose.model('Users', UserSchema);
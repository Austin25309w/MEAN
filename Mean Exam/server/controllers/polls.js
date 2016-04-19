var mongoose = require('mongoose');
var Polls = mongoose.model('Polls');

module.exports = {

	show: function(req,res){
        Polls.find({},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    showOne: function(req,res){
        Polls.findOne({_id:req.params.id},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
        var poll = new Polls(req.body) 
        poll.save(function(err){
            if(err)
                console.log(err);
            else
                res.redirect('/polls');
        });
    },

    delete: function(req,res){
        Polls.remove({_id:req.params.id},function(err,data){
            if(err)
                console.log(err);
            else
                res.redirect('/polls');
        });
    },

    vote: function(req,res){
        Polls.findOneAndUpdate(
        	{_id:req.params.id},
        	{$inc: {req.body.option.votes:1}},
        	{new:true},
        	function(err,data){
            if(err)
                console.log(err);
            else{
            	Polls.findOne({_id:data._id},function(err,data){
		            if(err)
		                console.log(err);
		            else
		                res.json(data);
		        });
            }
        });
    },





}

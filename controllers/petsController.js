/**
 * Created by mansi soni on 4/7/2017.
 */
'use strict';

var mongoose, Task;

mongoose = require('mongoose');
var Pets;
Pets = mongoose.model('Pets');

exports.list_all_pets = function(req, res) {
    Pets.find({}, function(err, pets) {
        if (err)
            res.send(err);
        res.json(pets);
    });
};

exports.create_a_pet = function(req, res) {
    var new_pet = new Pets(req.body);
    new_pet.save(function(err, pets) {
        if (err)
            res.send(err);
        res.json(pets);
    });
};


exports.read_a_pet = function(req, res) {
    Pets.findById(req.params.Id, function(err, pets) {
        if (err)
            res.send(err);
        res.json(pets);
    });
};


exports.update_a_pet = function(req, res) {
    Pets.findOneAndUpdate(req.params.Id, req.body, {new: true}, function(err, pets) {
        if (err)
            res.send(err);
        res.json(pets);
    });
};


exports.delete_a_pet = function(req, res) {
    Pets.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Pet successfully deleted' });
    });
};
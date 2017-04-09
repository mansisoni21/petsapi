/**
 * Created by mansi soni on 4/7/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId;
var PetsSchema;

ObjectId = Schema.ObjectId;
PetsSchema = new Schema({
    Id: ObjectId,
    PetsName: {type: String},
    PetsType: {type: String},
    PetsBreed: {type: String},
    Location: {type: String},
    Lat: {type:Number},
    Long: {type:Number}
});

module.exports = mongoose.model('Pets', PetsSchema);
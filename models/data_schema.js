const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name:{
        type:String,
        required: true,
        unique:false,
        trim:true,
        minlength:3,
    },
    color:{
        type:String,
        required: true,
        unique:false,
        trim:true,
        minlength:3,
    }
},{
        timestamps: true
}

);

const Data = mongoose.model('Data',dataSchema)
module.exports = Data;

// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007

// Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
// Everyone is permitted to copy and distribute verbatim copies
// of this license document, but changing it is not allowed.

//      Preamble

// The GNU General Public License is a free, copyleft license for
// software and other kinds of works.


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

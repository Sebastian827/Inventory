const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    nombre:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    estado:{
        type:String,
        required:true,
        enum:[
            'Activo',
            'Inactivo'
        ]
    },
    creationDate:{
        type:Date,
        required:true
    },
    updateDate:{
        type:Date,
        required:true
    }


});


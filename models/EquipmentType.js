const {Schema, model}= require('mongoose');


const EquipmentTypeSchema = Schema({
    nombre:{
        type: String,
        require: true
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


module.exports = model('EquipmentType',EquipmentTypeSchema);
const {Schema, model} = require('mongoose');


const EquipmentStatusSchema = Schema({
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
    BuyDate:{
        type:Date,
        required:true
    },
    Color:{
        type:String,
        required:true
    },
    

    

});

module.exports = model('EquipmentStatus',EquipmentStatusSchema);
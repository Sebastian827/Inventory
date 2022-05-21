const {Schema, model} = require('mongoose');



const InventorySchema = Schema({

    Serial:{
        type:String,
        required: true,
        unique: true
    },
    Modelo:{
        type:String,
        required: true
    },
    Descripcion:{
        type:String,
        required: true
    },
    Foto:{
        type:String,
        required: true
    },
    Price:{
        type:Number,
        required:true
    },
    User:{
        type: Schema.Types.ObjectId,
         ref: 'User',
         required: false
    },
    Brand:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    EquipmentStatus:{
        type: Schema.Types.ObjectId,
        ref: 'EquipmentStatus',
        required: true
    },
    EquipmentType:{
        type: Schema.Types.ObjectId,
        ref:'EquipmentType',
        required:true
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


module.exports = model('Inventory',InventorySchema);
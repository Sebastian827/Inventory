const {Router} = require('express');
const EquipmentType = require('../models/EquipmentType');

const router = Router();

router.post('/', async function(req,res){
    try{
        let equipmentType = new EquipmentType();

        let existEquipmentType = await EquipmentType.findOne({name : req.body.name});

        if(existEquipmentType){
            return res.send("Tipo de equipo ya existente")
        }
        equipmentType.name = req.body.name;
        equipmentType.state = req.body.state;
        equipmentType.creationDate = new Date();
        equipmentType.updateDate = new Date();

        equipmentType =  await equipmentType.save();

        console.log(equipmentType);
        res.send(equipmentType);
    }catch(error){
        res.send("Ha ocurrido un error");
        console.log(error);

    };
});
router.get('/',async function(req,res){
    try{
        let existEquipmentType = await EquipmentType.find();
        if(!existEquipmentType){
            return res.send("No se enncontraron tipos de equipos")
        }
        res.send(existEquipmentType);

    }catch(error){
        console.log(error);
    }

});

router.put('/:equipmentTypeId',async function(req,res){
    try{
        let existEquipmentType = await EquipmentType.findById(req.params.equipmentTypeId);
        if(!existEquipmentType){
            return res.send("No se encontró ese tipo de equipo")
        }
        existEquipmentType.name = req.body.name;
        existEquipmentType.state = req.body.state;
        existEquipmentType.updateDate = new Date();

        existEquipmentType =  await existEquipmentType.save();

        console.log(existEquipmentType);
        res.send(existEquipmentType);

    }catch(error){
        console.log(error);
        res.send("Hubo un error");

    }
    

});



module.exports= router;
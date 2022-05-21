const {Router} = require('express');
const EquipmentStatus = require('../models/EquipmentStatus');

const router = Router();

router.post('/',async function(req,res){
    try{
        let equipmentStatus = new EquipmentStatus();

        const existEquipmentStatus = await EquipmentStatus.findOne({name: req.body.name});
        if(existEquipmentStatus){
            return res.send("Estado de equipos ya existente");
        };

        equipmentStatus.name = req.body.name;
        equipmentStatus.state = req.body.state;
        equipmentStatus.creationDate = new Date();
        equipmentStatus.updateDate = new Date();

        equipmentStatus = await equipmentStatus.save();

        console.log(equipmentStatus);
        res.send(equipmentStatus);



    }catch(error){
        res.send("Ha ocurrido un error");
        console.log(error)
    }

});

router.get('/',async function(req,res){
    try{
        const equipmentStatus = await EquipmentStatus.find();
        
        res.send(equipmentStatus);

    }catch(error){
        console.log(error);
        res.send("Ha ocurrido un error");
    }


});
router.put('/:equipmentStatusId',async function(req,res){
    try{
        let equipmentStatus = await EquipmentStatus.findById(req.params.equipmentStatusId);

        if(!equipmentStatus){
            res.send("Estado de equipo no encontrado");
        };
        equipmentStatus.name = req.body.name;
        equipmentStatus.state = req.body.state;
        equipmentStatus.updateDate = new Date();

        equipmentStatus = await equipmentStatus.save();

        console.log(equipmentStatus);


    }catch(error){
        console.log(error);
        res.send("Ha ocurrido un error");

    }

});


module.exports= router;
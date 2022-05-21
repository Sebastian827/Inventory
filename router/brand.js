const {Router} = require('express');
const Brand = require('../models/Brand');
const router = Router();


router.post('/', async function(req,res){
    try{
        let brand = new Brand();

        const existBrand = await Brand.findOne({name: req.body.name});
        if(existBrand){
            return res.send("Marca ya existente");
        }

        brand.name = req.body.name;
        brand.state = req.body.state;
        brand.creationDate = new Date();
        brand.updateDate = new Date();

        brand = await brand.save();
        res.send(brand);
    }catch(error){
        res.send("Ha ocurrido un error");
        console.log(error);
    }

});
router.get('/', async function(req,res){
    try{
        const brand = await Brand.find();
        res.send(brand);

    }catch(error){
        console.log(error);
        res.send("Ha ocurrido un error");
    }

});
router.put('/:idBrand', async function(req,res){
    try{
        let brand = await Brand.findById(req.params.idBrand);
       

        if(!brand){
            res.send("Marca no encontrada");
        };

        brand.name = req.body.name;
        brand.state = req.body.state;
        brand.updateDate = new Date();

        brand = await brand.save();
        res.send(brand);



    }catch(error){
        console.log(error);
        res.send("Ha ocurrido un error");
    }

});



module.exports= router;
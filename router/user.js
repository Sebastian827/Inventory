const {Router} = require('express');
const User = require('../models/User');

const router = Router();

router.post('/',async function  (req,res){
   
    try{
        console.log('Objeto recibico',req.body);
        let user = new User();

        const emailExists = await User.findOne({email : req.body.email });
        console.log(emailExists);
        if (emailExists){
            return res.send("Email ya existe");
            
        }

        user.name = req.body.name;
        user.email= req.body.email;
        user.state= req.body.state;
        user.creationDate= new Date();
        user.updateDate= new Date();
        user = await user.save();
        res.send(user);
    }catch (error){
        res.send('ocurrio un error');
    }
    
});

router.get('/',async function(req,res){
    try{
        const user = await User.find();
        res.send(user);

    }catch(error){
        console.log(error);
        res.send("Ha ocurrido un error");
    }

});

router.get('/byemail',async function(req,res){
    try{
        const userExist = await User.findOne({email : req.body.email });
        console.log(userExist);

        res.send(userExist);



    }catch (error){
        console.log(error);
        res.send("Ha ocurrido un error");
    }
})
router.put('/',function(req,res){
    res.send('inicio');

});
router.delete('/',function(req,res){
    res.send('inicio');

});


module.exports= router;
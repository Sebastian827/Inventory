const {Router} = require('express');

const router = Router();

router.post('/',function(req,res){
    res.send('inicio');

});
router.get('/',function(req,res){
    res.send('inicio');

});
router.put('/',function(req,res){
    res.send('inicio');

});
router.delete('/',function(req,res){
    res.send('inicio');

});


module.exports= router;
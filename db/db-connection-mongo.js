const mongo = require('mongoose');

const getConnection = async() => {

    try{
        const url = 'mongodb://sebastian:root@cluster0-shard-00-00.06uyn.mongodb.net:27017,cluster0-shard-00-01.06uyn.mongodb.net:27017,cluster0-shard-00-02.06uyn.mongodb.net:27017/inventario-iud?ssl=true&replicaSet=atlas-6qflpw-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongo.connect(url);
        console.log('conexion exitosa');

    }catch (error){
        console.log(error);

    }

}

module.exports={
    getConnection,
}
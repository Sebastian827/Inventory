const {getConnection} = require('./db/db-connection-mongo');
const express = require('express')
const app = express()
const port = 3000

getConnection();

//Parseo Json

app.use(express.json());

app.use('/user',require('./router/user'));
app.use('/brand',require('./router/brand'));
app.use('/equipmentStatus',require('./router/equipmentStatus'));
app.use('/equipmenttype',require('./router/equipmentType'));
app.use('/inventory',require('./router/inventory'));
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
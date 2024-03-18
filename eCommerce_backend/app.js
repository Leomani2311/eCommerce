const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const userRouter = require('./Routes/User_routes');
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users',userRouter);

(async() =>{
    try{
        await sequelize.sync({force: false});
        console.log('Database synced suceesfully');
    }catch (error){
        console.log("Error message database :",error);
    }
})();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>{
    console.log( `server is runing on port ${PORT}`);
});
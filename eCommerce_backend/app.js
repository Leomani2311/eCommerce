const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const userRouter = require('./Routes/User_routes');
const New_products = require('./Routes/New_product_routes');
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users',userRouter);
app.use('/api/new_products',New_products);

(async() =>{
    try{
        await sequelize.sync({force: false});
        console.log('Database synced suceesfully');
    }catch (error){
        console.log("Error message database :",error);
    }
})();

const PORT = process.env.PORT || 6002;

app.listen(PORT, () =>{
    console.log( `server is runing on port ${PORT}`);
});
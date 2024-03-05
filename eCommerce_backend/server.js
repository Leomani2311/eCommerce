const express = require('express');
// connect to your MsSQL database using the `mysql` package. 
// Implement API endpoints to manipulate data in your MySQL database.
const mysql = require('mysql');  
const  bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3002;
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'ecomm_dev'
});

connection.connect (err=>{
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
      }
      console.log('Connected to MySQL database');
});

app.get('/api/data', (req, res) => {
    console.log("........_______________...........")
    connection.query('SELECT * FROM ecom_new_product', (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
        console.log(".........results..........",results)
    });
});
app.listen(port, () =>{
    console.log(`server is runing port ${port}`);
})


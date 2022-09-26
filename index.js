import priceRoutes from './routes/price.js'
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", priceRoutes);


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
     database:"node_db",
     multipleStatements:true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    app.listen(5000, () => {
      console.log('Server is running at port 5000');
  });
  });
  
 
 
 

  export default con;
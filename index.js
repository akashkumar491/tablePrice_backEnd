import priceRoutes from './routes/price.js'
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const PORT =process.env.PORT || 5000;
const app = express();
app.use(cors());

app.use(express.json());
app.use("/", priceRoutes);


var con = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "password",
    //  database:"node_db",
    //  multipleStatements:true

     host: "sql.freedb.tech",
     user: "freedb_rootUser",
     password: "w989VDX%#*H45Gc",
      database:"freedb_priceTable",
      multipleStatements:true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log('Server is running at port 5000');
  });
  });
  
 
 
 

  export default con;
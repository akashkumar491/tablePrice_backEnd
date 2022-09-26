import con from "../index.js";
//----------------------------------------------------------------------
// GET BASEPRICE

const getBasePriceTable = (req,res)=>{
  try{
    con.query("select * from basePrice",(err,result)=>{
        if(err) throw err;
        console.log("Baseprice table fetched");
        res.status(200).json({
        status: "Sucess",
        message: "Baseprice table fetched",
        data:result
      });
       })
}
catch(err){
  res.status(400).json({
    status: "Failed",
    message: error.message
  });
}
}
//---------------------------------------------------------------------
// POST BASEPRICE

const addItemToBasePriceTable =  (req, res)=>{

    var amount = req.body.amount;

try{
   con.query(`INSERT INTO basePrice (id,amount) VALUES (${Math.floor(Math.random() * 100)},${amount})`, (err, result)=> {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.status(200).json({
    status: "Sucess",
    message: "1 record inserted",
  });

}
catch(err){
  res.status(400).json({
    status: "Failed",
    message: error.message,
  });
}
}
//----------------------------------------------------------------------------------------
//PUT BASE PRICE TABLE 

const updateBasePriceTable = (req,res)=>{
  const data = [{amount:req.body.amount},parseInt(req.params.id)];
 
  try {
  con.query("UPDATE basePrice SET ? WHERE id = ?", data,(err,result)=>{
    if (err) throw err;
    console.log("1 record updated");
  })
  res.status(200).json({
    status: "Sucess",
    message: "1 record updated",
  });
}
  catch(err){
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
}
}

//----------------------------------------------------------------------------------------
// DELETE BASE PRICE
const deleteBasePriceTable =(req,res)=>{

try{
con.query("DELETE FROM basePrice WHERE id = " +(req.params.id),(err,result)=>{
  if(err) throw err;
  console.log("1 record deleted");
 res.status(200).json({
  status: "Sucess",
  message: "1 record deleted",
  data:result
   });
})
}
catch{
console.log(err)
}
}

//-----------------------------------------------------------------------------------------
// GET SLOTPRICE

const getSlotPriceTable = (req,res)=>{
  try{
  con.query("select * from slotPrice",(err,result)=>{
    if(err) throw err;
    console.log("Slotprice table fetched");
   res.status(200).json({
    status: "Sucess",
    message: "Slotprice table fetched",
    data:result
     });
  })
}
  catch(err){
    res.status(400).json({
      status: "Failed",
      message: error.message
    });
  }
    }
//--------------------------------------------------------------------------------------
//POST SLOT PRICE
const addItemToSlotPriceTable = (req,res)=>{
  var amount  = req.body.amount;
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  
  try{
  con.query(`INSERT INTO slotPrice (id,amount,startTime,endTime) VALUES (${Math.floor(Math.random() * 100)},${amount},'${startTime}','${endTime}')`, (err, result)=> {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.status(200).json({
    status: "Sucess",
    message: "1 record inserted",
  });
   
}
catch(err){
  res.status(400).json({
    status: "Failed",
    message: error.message,
  });
}
}

//-----------------------------------------------------------------------------------------
//PUT SLOT PRICE

const updateSlotPriceTable = (req,res)=>{
  const data = [{amount:req.body.amount,startTime:req.body.startTime,endTime:req.body.endTime},parseInt(req.params.id)];
 
  try {
  con.query("UPDATE slotPrice SET ? WHERE id = ?", data,(err,result)=>{
    if (err) throw err;
    console.log("1 record updated");
  })
  res.status(200).json({
    status: "Sucess",
    message: "1 record updated",
  });
}
  catch(err){
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
}
}
//--------------------------------------------------------------------------------------
//DELETE SLOT PRICE
const deleteSlotPriceTable =(req,res)=>{
 
  try{
  con.query("DELETE FROM slotPrice WHERE id = " +(req.params.id),(err,result)=>{
    if(err) throw err;
    console.log("1 record deleted");
   res.status(200).json({
    status: "Sucess",
    message: "1 record deleted",
    data:result
     });
  })
  }
  catch{
  console.log(err)
  }
  }


export {
  getBasePriceTable,
  addItemToBasePriceTable,
  getSlotPriceTable,
  addItemToSlotPriceTable,
  updateSlotPriceTable,
  updateBasePriceTable,
  deleteBasePriceTable,
  deleteSlotPriceTable
};
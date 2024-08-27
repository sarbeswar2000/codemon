const express=require('express');
const connectTomongo=require('./db.js');
const cors=require('cors');
const port=3000;
const app=express();

app.use(cors())
app.use(express.json());
app.use("/Auth", require("./route/Auth"));
// app.get("/", (req, res) => {
//     res.send("Hello guys this Sarbeswar and this is my first backened run");
//   });
app.listen(port,()=>{
    console.log(`listening on the port${port}`);
});
connectTomongo();
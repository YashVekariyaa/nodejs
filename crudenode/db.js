import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/crud",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log('e :>> ', e);
})
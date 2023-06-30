import express from 'express'
import "./db.js";
import bodyParser from 'body-parser';
import cors from 'cors'
import authRoute from "./routes/auth.js"

const app = express();
app.use(bodyParser.json())
app.use(express.json())
app.use(cors('*'))

app.use("/user", authRoute)


app.listen(4000,()=>{
    console.log(`Server running on port 4000`);
})
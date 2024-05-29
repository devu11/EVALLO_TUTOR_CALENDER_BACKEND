import express from "express"
import { config } from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import Events from "./routes/Events.js"
config();
const app = express()

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());






app.use("/api/events",Events)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(()=>
    console.log("mongoose connected")
)



app.listen(PORT,()=>{
    console.log(`Server started running at ${PORT}`);
})

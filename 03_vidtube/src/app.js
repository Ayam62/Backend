import express from "express"
import cors from "cors"

const app=express();
app.use(
    cors(
        {
            origin:process.env.CORS_ORIGIN,
            credentials:true,
        }
    )
)
//common middleware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))//to understand form data//extended true means it backend can understand complex data like nested objects etc.
app.use(express.static("public"));//serves static files like images,css JS etc//all files inside oublic can be accessed by backend

//import routes
import router from "./routes/healthcheck.routes";
import { healthcheck } from "./controllers/healthCheck.controller";

//routes 

app.use("/api/v1/healthcheck",router)

export {app};

//NOW IT IS READY TO BE TESTED IN POSTMAN


import  express, { Router }  from "express";
import { router } from "./routes/flight.js";

const app = express()

app.use(router)

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
});
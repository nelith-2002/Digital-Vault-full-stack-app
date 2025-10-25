import express from  "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionsRoute.js"

dotenv.config();

const app = express();

//middleware
app.use(ratelimiter)
app.use(express.json());

//port declaration
const PORT = process.env.PORT || 5001

//server check route
app.get('/api/healt-check' , (req, res)=>{
    res.status(200).send("server is working...")
})


console.log("my port: ", process.env.PORT);

app.use("/api/transactions", transactionRoute);

initDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log("Server is up and running on PORT:" , PORT);
        
    })
})
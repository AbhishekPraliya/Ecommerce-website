import express from "express"
import userRoutes from "./routes/user.route.js"
import productRoutes from "./routes/product.route.js"
import webRoutes from "./routes/web.route.js"
import contactUsRoutes from './routes/contactUs.routes.js';
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors";

const app=express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({limit:"10mb", extended:true}));

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth", userRoutes )
app.use("/api/product", productRoutes )
app.use("/api/web", webRoutes )
app.use('/api/contact-us', contactUsRoutes);


app.listen(PORT,()=>{
    console.log("Hello Abhishek, Server is running on port:"+PORT);
    connectDB();
})

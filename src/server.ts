import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

//Reading .env variables
dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;
const user = process.env.MONGOUSER;
const pass = encodeURIComponent(process.env.MONGOPASS!);

//bodyParser library to express
app.use(bodyParser.json());
const mongoURI = `mongodb+srv://${user}:${pass}@nodebe.uushajp.mongodb.net/NodeDB?retryWrites=true&w=majority&appName=NodeBE`

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to mongodb"))
    .catch((err: any) => console.log(err));

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

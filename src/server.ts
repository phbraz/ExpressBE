import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import seedDataRoutes from "./routes/seedDataRoutes";
import swaggerUi from "swagger-ui-express";

//Reading .env variables
dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;
const user = process.env.MONGOUSER;
const pass = encodeURIComponent(process.env.MONGOPASS!);

//Adding swagger to the app
const swaggerJsDoc= require("swagger-jsdoc"); //no types for this library hence why we are declaring it like this.
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Node BackEnd',
            description: 'API Information',
            contact: {
                name: 'Developer'
            },
            servers: [`http://localhost:${PORT}`]
        }
    },
    apis: ["./src/controllers/*.ts", "./src/routes/*.ts"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//bodyParser library to express
app.use(bodyParser.json());
const mongoURI = `mongodb+srv://${user}:${pass}@nodebe.uushajp.mongodb.net/NodeDB?retryWrites=true&w=majority&appName=NodeBE`

mongoose.connect(mongoURI)
    .then(() => console.log("Connected to mongodb"))
    .catch((err: any) => console.log(err));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/users", userRoutes);
app.use("/seed", seedDataRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import houseRoute from "./route/house.route.js"
import userRoute from "./route/user.route.js"
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


// defining routes
app.use("/house",houseRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Sever is listening on port ${PORT}`);
})
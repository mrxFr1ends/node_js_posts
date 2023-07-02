import express from "express";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import { DB_URL, PORT } from "./config.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
    console.log("Starting server...");
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startApp();

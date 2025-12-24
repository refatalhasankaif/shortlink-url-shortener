import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/mongo.config.js";
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

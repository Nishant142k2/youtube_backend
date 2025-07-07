// require("dotenv").config()
import dotenv from "dotenv";
import connectToDatabase from "./db/index.js";

dotenv.config({
    path: "./.env"
});
connectToDatabase()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});










// import express from "express";
// const app = express ;
// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error) => {
//         console.log("Error in Express app:", error);
//         throw error
//        })
//        app.listen(process.env.PORT || 3000, () => {
//         console.log(`Server is running on port ${process.env.PORT || 3000}`);
//        });
//     } catch(error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })()
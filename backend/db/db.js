import mongoose from "mongoose";

function conntionDb() {

    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Db connected");
    }).catch((err) => {
        console.log("Db connection failed", err);
    }) 
}

export default conntionDb;


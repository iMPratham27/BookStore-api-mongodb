const mongoose = require('mongoose');

const connectDB = async() => {

    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected")
    }catch(err){
        console.error("Error in MongoDB connection", err);
        process.exit(1); // Force app to exit
    }
}

// export connectDB
module.exports = connectDB;
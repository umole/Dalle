import mongoose from "mongoose";

async function connectDB(url) {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('Mongoose Connected'))
        .catch((err) => {
            console.error(err);
        })
}

export default connectDB;
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './mongodb/connect';

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send("Hello Chief!");
})

async function startServer() {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(3000, () => console.log('Server has started on port 3000'))
    } catch (error) {
        console.error(error);
    }
   
}

startServer();
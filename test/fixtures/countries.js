import fs from 'fs';
import 'dotenv/config';
import mongoose from 'mongoose';
import app from 'express-on/app';
import countries from './../../models/countries.js';

let server;

export default {
    app: () => app,
    server: () => server,
    deinit: async () => {
        await server.close();
        return mongoose.disconnect();
    },
    init: async () => {
        server = await app.listen();
        await mongoose.connect(process.env.MONGO_URI);
        //await mongoose.connect(global.__MONGO_URI__);
        return new Promise((resolve, reject) => fs.readFile('test/data/countries.json', 'utf-8', (err, data) => {
            if (err) reject(err)
            else //console.log(JSON.parse(data)) ||
                countries.deleteMany({}).then(() => countries.insertMany(JSON.parse(data)).then(resolve))
        }))
    }
};

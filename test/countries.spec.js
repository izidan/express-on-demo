import('mongodb');
import fs from 'fs';
import 'dotenv/config';
import mongoose from 'mongoose';
import model from './../models/countries.js';

describe('aggregations', () => {

    beforeAll(() => mongoose.connect(process.env.MONGO_URI || global.__MONGO_URI__));

    afterAll(() => mongoose.disconnect());

    it('should reseed all countries data using insertMany', () =>
        new Promise((resolve, reject) => fs.readFile('test/countries.json', 'utf-8', (err, data) =>
            err ? reject(err) : model.deleteMany({}).then(() =>
                model.insertMany(JSON.parse(data)).then(resolve).catch(reject)).catch(reject)
        )).then(() => model.countDocuments()
            .then(count => expect(count).toBe(249))))

    it('should have name attributes for all countries', () =>
        model.find({ name: { $exists: false } })
            .then(countries => expect(countries).toHaveLength(0)));

    it('should have names for all countries', () =>
        model.find({ name: null })
            .then(countries => expect(countries).toHaveLength(0)));

    it('should support aggregate object', () =>
        model.aggregate([{ $group: { _id: '$continent', count: { $sum: 1 } } }])
            .then(result => expect(result).toHaveLength(7)));

});
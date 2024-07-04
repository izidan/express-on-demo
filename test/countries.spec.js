import supertest from 'supertest';
import fixture from './fixtures/countries.js';

describe('aggregations', () => {
    beforeAll(fixture.init);
    afterAll(fixture.deinit);
    const request = () => supertest(fixture.app());

    it('should reject empty aggregate object', () =>
        request().get('/api/countries?aggregate={}')
            .expect(400));

    it('should reject empty aggregate array', () =>
        request().get('/api/countries?aggregate=[]')
            .expect(400));

    it('should support aggregate object', () =>
        request().get('/api/countries?aggregate={"$group":{"_id":"$continent","count":{"$sum":1}}}')
            .expect(200)
            .then(({ body }) => expect(body).toHaveLength(8)));

    it('should support aggregate with count', () =>
        request().get('/api/countries?aggregate={"$group":{"_id":"$continent","count":{"$sum":1}}}&count=true')
            .expect(200, '8'));
});
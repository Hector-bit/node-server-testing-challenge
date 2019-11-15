const db = require('../data/dbConfig');

const { find } = require('./trainersModel');
const { insert } = require('./trainersModel');

describe('trainers model', function() {
    describe('find()', function() {
        beforeEach(async () => {
            await db("trainers").truncate();
        });

        it('should find an empty list of trainers', async function() {
            await find();
            
            const trainer = await db("trainers");
            expect(trainer).toHaveLength(0); 
        });
    });
});

describe('trainers model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db("trainers").truncate();
        });

        it('should insert the provided pokemon', async function() {
            await insert({ name: 'White', badges: 2 });

            const trainer = await db("trainers");

            expect(trainer).toHaveLength(1);
            expect(trainer[0].name).toBe('White');

        });
    })
})
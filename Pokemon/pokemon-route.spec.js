const db = require('../data/dbConfig');

const { find } = require('./pokemonModel');
const { insert } = require('./pokemonModel');

describe('pokemon model', function() {
    describe('find()', function() {
        beforeEach(async () => {
            await db("pokemon").truncate();
        });

        it('should find an empty list of pokemon', async function() {
            //insert a hobit
            await find();
            
            //check if it was inserted into the db
            const pokemon = await db("pokemon");
            expect(pokemon).toHaveLength(0); 
        });
    });
});

describe('pokemon model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db("pokemon").truncate();
        });

        it('should insert the provided pokemon', async function() {
            await insert({ name: 'Meowth', type: 'Normal' });

            const pokemon = await db("pokemon");

            expect(pokemon).toHaveLength(1);
            expect(pokemon[0].name).toBe('Meowth');

        });
    })
})
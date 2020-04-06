import getPokemon from './index';

describe('getPokemon', () => {
    const api = "mock-data";

    it('should get the data', async () => {
        const data = await getPokemon(api);
        expect(data).toEqual("mock-data");
    });
});
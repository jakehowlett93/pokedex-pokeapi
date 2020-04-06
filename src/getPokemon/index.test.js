import getPokemon from './index'

// eslint-disable-next-line no-undef
global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) => {
        resolve({
            ok: true,
            Id: 'mock-data',
            json: function() {
                return {Id: 'mock-data'}
            }
        })
    })
})

const api = 'mock-api'

describe('getPokemon', () => {

    
    it('should get the data', async () => {
        const data = await getPokemon(api);
        expect(data.Id).toEqual("mock-data")
    });
});
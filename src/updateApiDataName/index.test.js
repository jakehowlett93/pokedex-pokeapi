import updateApiDataName from './index';

describe('updateApiDataName', () => {
    const apiData = {
        name: 'no-change'
    }

    const searchBar = document.body;
    searchBar.value = 'mock-value'

    beforeEach(() => {
        updateApiDataName(searchBar, apiData)
    })

    it('should update the name value for apiData', () => {
        expect(apiData.name).toEqual('mock-value')
    });
});
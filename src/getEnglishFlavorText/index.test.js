import getEnglishFlavorText from './index'

describe('getEnglishFlavorText', () => {
    const flavorTextList = [
        {
            language: {
                name: "en"
            },
            flavor_text: "mock-value"
        }]
    let returnValue;

    beforeEach(() => {
        returnValue = getEnglishFlavorText(flavorTextList)
    });

    it('should return the mock value', () => {
        expect(returnValue).toEqual("mock-value")
    });
})
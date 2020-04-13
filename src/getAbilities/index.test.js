import getAbilities from './index'

describe('getAbilities', () => {
    const abilities = document.body
    const abilitiesList = [
        {
            ability: {
                name: "mock-name"
            }
        }
    ]


    beforeEach(() => {
        getAbilities(abilitiesList, abilities)
    });

    it('should remove the child elements', () => {
        expect(abilities.innerHTML).toEqual("<li>mock-name</li>")
    });
})
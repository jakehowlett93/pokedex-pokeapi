import clearAbilities from './index'

describe('clearAbilities', () => {
    const abilities = document.body
    
    abilities.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>'; 
    let returnValue;

    beforeEach(() => {
        returnValue = clearAbilities(abilities)
    });

    it('should remove the child elements', () => {
        expect(returnValue.innerHTML).toEqual("")
    });
})
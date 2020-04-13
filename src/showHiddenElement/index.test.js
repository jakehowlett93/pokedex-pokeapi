import showHiddenElement from './index';

describe('showHiddenElement', () => {
    const hiddenElement = document.body;
    hiddenElement.classList.add('hideElement');

    beforeEach(() => {
        showHiddenElement(hiddenElement)
    });

    it('should remove the hideElement class', () => {
        expect(hiddenElement.classList).toHaveLength(0)
    });
});
import clearAbilities from './index';

describe('clearAbilities', () => {
	const abilities = document.body;
	abilities.innerHTML = '<div>' + '  <span id="username" />' + '  <button id="button" />' + '</div>';

	beforeEach(() => {
		clearAbilities(abilities);
	});

	it('should remove the child elements', () => {
		expect(abilities.innerHTML).toEqual('');
	});
});

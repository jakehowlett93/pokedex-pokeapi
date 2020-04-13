import capitalize from './index';

describe('capitalizeWord', () => {
	const word = 'mock-word';
	let returnValue;

	beforeEach(() => {
		returnValue = capitalize(word);
	});

	it('should capitalize the first letter of the word', () => {
		expect(returnValue).toEqual('Mock-word');
	});
});

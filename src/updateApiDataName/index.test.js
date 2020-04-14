import updateApiDataName from './index';

describe('updateApiDataName', () => {
	const searchBar = document.body;
	searchBar.value = 'mock-value';
	

	let returnValue;
	beforeEach(() => {
		returnValue = updateApiDataName(searchBar);
	});

	it('should return the name value', () => {
		expect(returnValue).toEqual('mock-value');
	});
});

import handleSubmit from './handleSubmit';

(async () => {
	try {
		const searchForm = document.getElementsByClassName('searchForm')[0];
		searchForm.addEventListener('submit', handleSubmit);
	} catch (e) {
		('something went wrong!');
	}
})();

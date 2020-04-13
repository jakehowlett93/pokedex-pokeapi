import handleSubmit from './handleSubmit';

(async () => {
	const searchForm = document.getElementsByClassName('searchForm')[0];
	searchForm.addEventListener('submit', handleSubmit);
})();

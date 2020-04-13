const showHiddenElement = (hiddenElement) => {
	if (hiddenElement) {
		hiddenElement.classList.remove('hideElement');
	}
	return hiddenElement;
};

export default showHiddenElement;

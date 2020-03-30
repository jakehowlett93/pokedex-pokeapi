const clearAbilities = (abilities) => {
	if (abilities.children.length > 0) {
		abilities.innerHTML = '';
	}
};

export default clearAbilities;

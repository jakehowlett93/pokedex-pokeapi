const clearAbilities = abilities => {
	if (abilities.children.length > 0) {
		abilities.innerHTML = '';
	}
	return abilities;
};

export default clearAbilities;
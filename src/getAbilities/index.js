const getAbilities = (abilitiesList, abilities) => {
	abilitiesList.forEach((item) => {
		const ability = item.ability.name;
		const listElement = document.createElement('li');
		const abilityTextNode = document.createTextNode(ability);
		listElement.appendChild(abilityTextNode);
		abilities.appendChild(listElement);
	});
};

export default getAbilities;

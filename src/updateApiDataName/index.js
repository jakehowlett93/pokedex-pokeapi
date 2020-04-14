const updateApiDataName = (searchBar) => {
	if (searchBar.value) {
        let name = searchBar.value;
        name = name.toLowerCase()
        name = name.trim();
		return name;
	}
};

export default updateApiDataName;

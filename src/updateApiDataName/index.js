const updateApiDataName = (searchBar, apiData) => {
	if (searchBar.value) {
        let name = searchBar.value;
        name = name.toLowerCase()
        name = name.trim();
		apiData.name = name;
	}
};

export default updateApiDataName;

const updateApiDataName = (searchBar, apiData) => {
    if (searchBar.value) {
        apiData.name = searchBar.value
    }
}

export default updateApiDataName
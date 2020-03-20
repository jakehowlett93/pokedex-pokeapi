const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    name: "ditto"
};

const { url, type, name } = apiData;
const apiUrl = `${url}${type}/${name}`

async function getPokemon(apiUrl) {
    const response = await fetch(apiUrl)
    return data = await response.json();
}

(async () => {
    try {
        const pokemon = await getPokemon(apiUrl)
        
        document.getElementById("info").innerHTML = pokemon.name
        console.log(pokemon.name)

    } catch (e) {
        console.log("Somethings gone wrong!")
    }
})();




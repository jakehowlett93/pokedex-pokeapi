const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    name: "bellsprout"
};

let { url, type, name } = apiData;
let apiPokemonUrl = `${url}${type}/${name}`
let apiSpeciesUrl = `${url}${type}-species/${name}`

async function getPokemon(apiUrl) {
    const response = await fetch(apiUrl)
    data = await response.json();
    return data
}

function handleSubmit() {
    console.log("hi")
    
    apiData.name = event.currentTarget.value
    console.log(console.log(event), "hi")
}

(async () => {
    try {

        const searchForm = document.getElementsByClassName("searchForm")[0]
        searchForm.addEventListener("submit", handleSubmit() );

        const pokemon = await getPokemon(apiPokemonUrl)
        const species = await getPokemon(apiSpeciesUrl)

        document.getElementsByClassName("sprite")[0].src = pokemon.sprites.front_default

        const nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        document.getElementById("pokeName").innerHTML = nameCapitalized

        const pokeNumber = "#" + pokemon.order
        document.getElementById("pokeNumber").innerHTML = pokeNumber

        let pokeTypes = ""
        pokemon.types.forEach(item => {
            pokeTypes += item.type.name
            pokeTypes += " / "
        })
        pokeTypes = pokeTypes.substring(0, pokeTypes.length - 2);
        pokeTypes += "type"
        document.getElementById("pokeType").innerHTML = pokeTypes

        let flavourText
        flavourText = species.flavor_text_entries.find(element => 
            element.language.name === "en"
        )
        document.getElementsByClassName("description")[0].innerHTML = flavourText.flavor_text

        pokemon.abilities.forEach(item => {
            let ability = item.ability.name
            let abilityList = document.getElementsByClassName("abilities")[0]
            listElement = document.createElement("li")
            abilityTextNode = document.createTextNode(ability)
            listElement.appendChild(abilityTextNode)
            abilityList.appendChild(listElement)
        })


    } catch (e) {
        "something went wrong!"
    }
})();




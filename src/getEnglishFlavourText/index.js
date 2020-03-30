const getEnglishFlavorText = (flavorTextList) => {
    let flavorText;
    flavorText = flavorTextList.find((element) => element.language.name === 'en');
    return flavorText.flavor_text;
}

export default getEnglishFlavorText



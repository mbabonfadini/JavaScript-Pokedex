import Pokemon from "./pokemonModel.js"

const pokeApi = {}

function convertToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    pokemon.types = pokeDetail.types.map(typeSlot => typeSlot.type)
    pokemon.type = pokeDetail.types[0].type.name
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}



pokeApi.getPokeList = (offset = 0, limit = 20) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(
            resp => resp.json()
        )
        .then(
            resp => resp.results
        )
        .then(
            pokemons => pokemons.map(pokeApi.getPokemonDetail)
        )
        .then(
            detailRequest => Promise.all(detailRequest)
        )
        .then(
            poekomonsDetails => poekomonsDetails
        )
        .catch(
            err => err
        )
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(resp => resp.json())
        .then(convertToPokemon)
        
}



export default pokeApi
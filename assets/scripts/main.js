import buildDex from "./createComponent.js"
import pokeApi from "./pokedex.js"

const pokedex = window.document.getElementById("pokedex")
const next = window.document.getElementById("more")

let offsets = 0

async function convertToLi(offset) {

    await pokeApi.getPokeList(offset)
        .then(
            resp => resp.forEach(pokemon => pokedex.appendChild(buildDex(pokemon)))
        )



}

convertToLi()


next.addEventListener("click", () => onPaginationClick(20))

function onPaginationClick(offset) {

    offsets === 0 && offset < 0
        ? offsets
        : offsets = offsets + offset

    convertToLi(offsets)
}









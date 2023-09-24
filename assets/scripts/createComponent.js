function buildDex(pokemon) {

    const pokeIten = window.document.createElement("li")
    pokeIten.classList.add("pokemon")
    pokeIten.classList.add(pokemon.type)

    pokeIten.appendChild(createHeader(pokemon))
    pokeIten.appendChild(createArticle(pokemon))

    return pokeIten
}

function createList(list) {

    const HTML_LIST = window.document.createElement("ol")
    HTML_LIST.classList.add("types")

    list.forEach(iten => {
        const ITEN_LIST = window.document.createElement("li")
        ITEN_LIST.classList.add("type")
        ITEN_LIST.classList.add(iten.name)
        ITEN_LIST.innerHTML = iten.name

        HTML_LIST.appendChild(ITEN_LIST)
    })

    return HTML_LIST
}


function createHeader(pokeDetails) {

    const title = document.createElement("h3")
    title.innerText = pokeDetails.name

    const number = document.createElement("span")
    number.innerText = `#${pokeDetails.number}`
    number.classList.add("number")

    const headerDex = document.createElement("header")

    headerDex.appendChild(title)
    headerDex.appendChild(number)

    return headerDex
}

function createArticle(pokeDetails) {

    const bg = createImg()
    const pokePhoto = createImg(pokeDetails)

    const div = document.createElement("div")
    div.classList.add("photograph")

    div.appendChild(pokePhoto)
    div.appendChild(bg)

    const article = document.createElement("article")
    article.classList.add("detail")

    article.appendChild(createList(pokeDetails.types))
    article.appendChild(div)


    return article
}

function createImg(pokeDetails = "") {

    const img = document.createElement("img")

    const classIten =
        pokeDetails.photo
            ? "pokemonPhotograph"
            : "pokemonBg"

    const photoIten =
        pokeDetails.photo
            ? pokeDetails.photo
            : "./assets/img/pokeball.svg"


    img.classList.add(classIten)

    img.src = photoIten

    return img

}

export default buildDex
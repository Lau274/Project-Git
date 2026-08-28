let inputTitolo = document.querySelector("#titolo")
let inputParagrafo = document.querySelector("#paragrafo")
let bottone = document.querySelector("#crea")
let contenitore = document.querySelector("#contenitore")
let leva = document.querySelector("#leva")
let articolo = null
bottone.addEventListener("click", function () {

    let titolo = inputTitolo.value
    let paragrafo = inputParagrafo.value

    if (titolo === "" || paragrafo === "") {
        alert("Devi inserire sia il titolo che il paragrafo")
        return
    }

    articolo = document.createElement("article")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    h2.innerText = titolo
    p.innerText = paragrafo

    articolo.appendChild(h2)
    articolo.appendChild(p)

    contenitore.appendChild(articolo)

    inputTitolo.value = ""
    inputParagrafo.value = ""
})
leva.addEventListener("click", function(){
    if (articolo){
    articolo.remove()
    articolo = null
}
    else {
        alert("Non c'è nulla da rimuovere")
    }

})
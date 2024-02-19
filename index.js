let quantity = document.getElementById("quantity")

function add () {
    let quantityNumber = Number(quantity.innerText)
    let result = quantityNumber + 1
    quantity.innerText = result
}

function reset () {
    quantity.innerText = 0
}

const substract = () => {
    let quantityNumber = Number(quantity.innerText)
    let result = quantityNumber - 1
    quantity.innerText = result
}

let buttonSubstract = document.getElementById("substract")
buttonSubstract.addEventListener("click", substract)
function allClear() {
    document.querySelector(".input").innerHTML = ""
}

function del() {
    let deleteVar = document.querySelector(".input").textContent
    document.querySelector(".input").innerHTML = deleteVar.replace(/.$/, "")
}


document.querySelectorAll(".button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".input").innerHTML += e.target.dataset.value
    })
})

function solve() {
    let string = document.querySelector(".input").innerHTML
    string = string.replace(/(\d+(\.\d+)?)%/g, '($1/100)')
    try {
        let result = eval(string)
        document.querySelector(".input").innerHTML = result
    } catch (e) {
        document.querySelector(".input").innerHTML = "Error"
    }
}

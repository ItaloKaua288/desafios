function lista_visible() {
    var x = document.getElementById("lista-header")
    if (x.style.display == "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

function burguer() {
    var x = document.getElementById("lista-header")
    lista_visible()
    if (x.style.left == "100vw") {
        x.style.left = "calc(100vw + 141px)"
        while (x.style.left != "calc(100vw + 141px") {
            
        }
    } else {
        x.style.left = "100vw"
    }
}

function burguer() {
    var x = document.getElementById("lista-header")
    if (x.style.left == "100vw") {
        x.style.left = "calc(100vw + 141px)"
    } else {
        x.style.left = "100vw"
    }
}

function barr(n) {
    var elemento = document.getElementById('lateralbar');
    if (n == 1) {
        elemento.style.opacity = '0'
    } else {
        elemento.style.opacity = '0.5'
    }
}

function scrol() {
    var scroll = document.getElementById('principal')
    var bar = document.getElementById('lateralbar')

    posicao = scroll.scrollTop
    bar.style.top = `${posicao + 67}px`
}

function play(n, n2) {
    var elem = document.querySelectorAll('.play-svg')
    if (n == 1) {
        elem[n2 - 1].style.opacity = '1'
        elem[n2 - 1].style.top = '-145px'
    } else {
        elem[n2 - 1].style.opacity = '0'
        elem[n2 - 1].style.top = '-136px'
    }
}


function burguer() {
    const burguerImg = document.getElementById('img-burguer')
    const menu = document.getElementById('menu')
    const main = document.getElementById('main')

    if (menu.style.opacity == '1') {
        menu.style.opacity = '0'
        menu.style.height = '0vh'
        burguerImg.src = 'assets/menu-buguer-close.svg'
        main.style.opacity = '1'
        main.style.background = 'transparent'
    } else {
        menu.style.opacity = '1'
        menu.style.height = 'calc(100vh + 160px)'
        burguerImg.src = 'assets/menu-buguer-open.svg'
        main.style.opacity = '0'
        main.style.background = 'black'
    }
}

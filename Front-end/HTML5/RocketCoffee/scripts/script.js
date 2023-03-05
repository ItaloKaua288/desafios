function burguer() {
    const burguerImg = document.getElementById('img-burguer')
    const menu = document.getElementById('menu')
    if (menu.style.opacity == '1') {
        menu.style.opacity = '0'
        menu.style.height = '0vh'
        burguerImg.src = 'assets/menu-buguer-close.svg'
    } else {
        menu.style.opacity = '1'
        menu.style.height = 'calc(100vh + 160px)'
        burguerImg.src = 'assets/menu-buguer-open.svg'
    }
}

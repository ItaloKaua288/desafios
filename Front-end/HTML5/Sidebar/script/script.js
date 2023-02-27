function burguer() {
    var sidebarWidth = document.getElementById('sidebar');
    var logo = document.getElementById('logo')
    var container = document.getElementsByClassName('container-width')
    var abertos = document.getElementsByClassName('abertos')
    var label = document.getElementById('search-label')

    if (sidebarWidth.style.width === '78px') {
        sidebarWidth.style.width = "250px"
        logo.style.display = 'inline'
        label.style.backgroundColor = '#dce4e3'
        label.style.width = '207px'
        for (i = 0; i < abertos.length; i++) {
            try {    
                container[i].style.display = 'flex'
                container[i].style.textAlign = 'left'
            } catch {}
            abertos[i].style.display = 'inline-block'
        }
    } else {
        sidebarWidth.style.width = "78px"
        logo.style.display = 'none'
        label.style.backgroundColor = 'transparent'
        label.style.width = 'auto'
        for (i = 0; i < abertos.length; i++) {
            try {
                container[i].style.display = 'inline-block'
                container[i].style.textAlign = 'center'
            }  catch {}
            abertos[i].style.display = 'none'
            console.log(i)
        }
    }
}
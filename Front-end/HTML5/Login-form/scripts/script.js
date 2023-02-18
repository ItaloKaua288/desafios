function check() {
    var c = document.getElementById('remember')
    var x = document.getElementById('remember-span')
    var y = document.getElementById('check-img')
    if (c.checked) {
        x.style.backgroundColor = '#ffffff'
        y.style.display = 'block'
    } else {
        x.style.backgroundColor = 'transparent'
        y.style.display = 'none'
    }
}

function focusEmail() {
    document.getElementById('img-email').src = 'images/mail-focus.svg'
    document.getElementById('container-email').style.outline = '2px solid #ffc632'
}

function blurEmail() {
    document.getElementById('img-email').src = 'images/mail.svg'
    document.getElementById('container-email').style.outline = '2px solid #d4ccb6'
}

function focusPass() {
    document.getElementById('img-pass').src = 'images/lock-focus.svg'
    document.getElementById('container-pass').style.outline = '2px solid #ffc632'
}

function blurPass() {
    document.getElementById('img-pass').src = 'images/lock.svg'
    document.getElementById('container-pass').style.outline = '2px solid #d4ccb6'
}
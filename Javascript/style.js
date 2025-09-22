const darkmodeSwitch = document.querySelector('#switch')
const hasdarkmode = localStorage.getItem('darkmode')

if(hasdarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
} else if(hasdarkmode === 'on') {
    enableDarkMode()
} else if(hasdarkmode === 'off') {
    disableDarkMode()
}

darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked){
        enableDarkMode()
        localStorage.setItem('darkmode', 'on')
    } else {
        disableDarkMode()
        localStorage.setItem('darkmode', 'off')
    }
} )

function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}
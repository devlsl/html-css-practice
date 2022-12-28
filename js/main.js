const btnDarkMode = document.querySelector(".dark-mode-btn");

function setLightScheme() {
    btnDarkMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove('dark')
}

function setDarkScheme() {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add('dark')
}

// 1. Проверка тёмной темы на уровне системных настроек
if ( window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    setDarkScheme()
} 

// 2. Проверка тёмной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
    setDarkScheme()
} else if (localStorage.getItem('darkMode') === 'light') {
    setLightScheme()
}

// 3. Если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light"

    if (newColorScheme === "dark") {
        setDarkScheme()
        localStorage.setItem('darkMode', 'dark')
    } else {
        setLightScheme()
        localStorage.setItem('darkMode', 'light')
    }
})

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark")

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}


let header = document.createElement(`header`)
let links = document.createElement(`div`)
let a = document.createElement(`a`)
let a_1 = document.createElement(`a`)
let a_2 = document.createElement(`a`)
let a_3 = document.createElement(`a`)
let a_4 = document.createElement(`a`)
let a_5 = document.createElement(`a`)
let a_6 = document.createElement(`a`)
let img = document.createElement(`img`)

// logo
header.prepend(a)
a.prepend(img)
a.setAttribute(`href`, `#`)
a.classList.add(`logo`)
img.setAttribute(`src`, `https://wepro.uz/images/logo.png`)

// links
header.append(links)
links.classList.add(`links`)
links.prepend(a_1, a_2, a_3, a_4, a_5, a_6)
a_1.innerHTML = `Uz`
a_2.innerHTML = `Курсы`
a_3.innerHTML = `Преподаватели`
a_4.innerHTML = `Отзывы`
a_5.innerHTML = `Частные вопросы`
a_6.innerHTML = `Контакты`
document.body.prepend(header)
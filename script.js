let header = document.createElement(`header`)
let img = document.createElement(`img`)
let img_1 = document.createElement(`img`)
let a_1 = document.createElement(`a`)
let a_2 = document.createElement(`a`)
let main = document.createElement(`main`)
let wrapper = document.createElement(`div`)
let item = document.createElement(`div`)

// header/img/icon
header.prepend(img_1)
header.prepend(a_1, a_2)
header.prepend(img)
img.setAttribute(`src`, `icons/message-square (1).svg`)
img_1.setAttribute(`src`, `icons/menu (1).svg`)
a_1.setAttribute(`href`, `#`)
a_2.setAttribute(`href`, `#`)
a_1.innerHTML = `Caption`
a_2.innerHTML = `Original`

// main/wrapper
main.prepend(wrapper)
wrapper.classList.add(`wrapper`)
wrapper.prepend(item)
item.classList.add(`item`)

let info = document.createElement(`div`)
let h1_title = document.createElement(`h1`)
let h1_price = document.createElement(`h1`)
let h4_pre_title = document.createElement(`h4`)
let categories = document.createElement(`div`)
let categ_info = document.createElement(`div`)
let p_place = document.createElement(`p`)
let p_hours = document.createElement(`p`)
let p_skype = document.createElement(`p`)
let p_speaking = document.createElement(`p`)
let p_party = document.createElement(`p`)
let btn_send = document.createElement(`button`)
item.prepend(info)
item.append(categories)
info.prepend(h1_title)
info.append(h4_pre_title)
info.append(h1_price)
info.classList.add(`info`)
categories.classList.add(`categories`)
categ_info.classList.add(`categ_info`)
h1_title.innerHTML = `Гость`
h4_pre_title.innerHTML = `Приходи в любое время`
let price = 1000
h1_price.innerHTML = `$${price}`
categories.prepend(categ_info)
categories.append(btn_send)
categ_info.prepend(p_party)
categ_info.prepend(p_speaking)
categ_info.prepend(p_skype)
categ_info.prepend(p_hours)
categ_info.prepend(p_place)

p_place.innerHTML = `Место в общей зоне`
p_hours.innerHTML = `Доступ 24/7`
p_skype.innerHTML = `Skype room`
p_speaking.innerHTML = `Переговорная`
p_party.innerHTML = `Мероприятия`
btn_send.classList.add(`send`)
btn_send.innerHTML = `Выбрать тариф`


document.body.prepend(header)
document.body.append(main)

function item_active(element) {
    element = document.createElement(`div`)
    element.classList.add(`item`)
    wrapper.append(element)

    let info = document.createElement(`div`)
    let h1_title = document.createElement(`h1`)
    let h1_price = document.createElement(`h1`)
    let h4_pre_title = document.createElement(`h4`)
    let categories = document.createElement(`div`)
    let categ_info = document.createElement(`div`)
    let p_place = document.createElement(`p`)
    let p_hours = document.createElement(`p`)
    let p_skype = document.createElement(`p`)
    let p_speaking = document.createElement(`p`)
    let p_party = document.createElement(`p`)
    let btn_send = document.createElement(`button`)
    element.prepend(info)
    element.append(categories)
    info.prepend(h1_title)
    info.append(h4_pre_title)
    info.append(h1_price)
    info.classList.add(`info`)
    categories.classList.add(`categories`)
    categ_info.classList.add(`categ_info`)
    h1_title.innerHTML = `Гость`
    h4_pre_title.innerHTML = `Приходи в любое время`
    h1_price.innerHTML = `$${price * 2}`
    price *= 2
    categories.prepend(categ_info)
    categories.append(btn_send)
    categ_info.prepend(p_party)
    categ_info.prepend(p_speaking)
    categ_info.prepend(p_skype)
    categ_info.prepend(p_hours)
    categ_info.prepend(p_place)

    p_place.innerHTML = `Место в общей зоне`
    p_hours.innerHTML = `Доступ 24/7`
    p_skype.innerHTML = `Skype room`
    p_speaking.innerHTML = `Переговорная`
    p_party.innerHTML = `Мероприятия`
    btn_send.classList.add(`send`)
    btn_send.innerHTML = `Выбрать тариф`

    let new_btn_active = document.querySelectorAll(`.send`)

    new_btn_active.forEach(btn => {
        btn.onclick = () => {
            item_active(item)
        }
        btn.onmouseenter = () => {
            btn.classList.add(`active`)
        }
        btn.onmouseleave = () => {
            btn.classList.remove(`active`)
        }
    })
}

let btn_send_active = document.querySelector(`.send`)

btn_send_active.onclick = () => {
    item_active(item)
}

btn_send_active.onmouseenter = () => {
    btn_send_active.classList.add(`active`)
}

btn_send_active.onmouseleave = () => {
    btn_send_active.classList.remove(`active`)
}
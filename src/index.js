import './sass/main.scss';
import cards from '../menu.json';
import templeCard from './templates/temple-card.hbs'
function makeUpCards (obj) {
    return obj.map(templeCard).join('')
}

const linkForRender = document.querySelector('.js-menu')
linkForRender.insertAdjacentHTML('afterbegin', makeUpCards(cards))
const changeBtn = document.querySelector('#theme-switch-toggle')
changeBtn.addEventListener('change', onInputChangeTheme)
const body = document.querySelector('body');
body.classList.add('light-theme')
if (localStorage.getItem('theme') === 'dark-theme') {
    body.classList.add('dark-theme')
    localStorage.setItem('theme', 'dark-theme')
    changeBtn.checked = true
}
function onInputChangeTheme(event) {
    
    if (changeBtn.checked) {
        body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark-theme')
        
    } else {
        body.classList.remove('dark-theme')
        localStorage.setItem('theme', 'light-theme')
    }

    
}



import './sass/main.scss';
import cards from '../menu.json';
import templeCard from './templates/temple-card.hbs'
function makeUpCards (obj) {
    return obj.map(templeCard).join('')
}

const linkForRender = document.querySelector('.js-menu')
linkForRender.insertAdjacentHTML('afterbegin', makeUpCards(cards))
const changeBtn = document.querySelector('#theme-switch-toggle')
console.dir(changeBtn)
changeBtn.addEventListener('change', onInputChangeTheme)
function onInputChangeTheme (event) {
   const body = document.querySelector('body');
   changeBtn.checked ? body.classList.add('dark-theme') : body.classList.remove('dark-theme')
   
}
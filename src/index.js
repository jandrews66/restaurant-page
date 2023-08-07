import './style.css';

import homePage from './pageLoad';
import menuModule from './menu';
import contactModule from './contact';

homePage();

const navList = document.getElementsByTagName("li")

for (let i = 0; i < navList.length; i++){
    navList[i].addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        removeElements();
        if (e.target.innerHTML == "Menu"){
            menuModule();
        } else if (e.target.innerHTML == "Contact"){
            contactModule();
        } else if (e.target.innerHTML == "Home"){
            homePage();
        }
    })
}

const removeElements = () => {
    const elements = document.querySelectorAll("#content > :not(:first-child)")
    for (const ele of elements) {
        content.removeChild(ele)
    }
}

import './style.css';

import homePage from './home';
import menuModule from './menu';
import contactModule from './contact';
import pageTemplate from './template.js'

pageTemplate();
homePage();

const navList = document.getElementsByTagName("li")

for (let i = 0; i < navList.length; i++){
    navList[i].addEventListener('click', (e) => {
        removeElements();
        setActive(navList[i])
        if (e.target.innerHTML == "Menu"){
            menuModule();
        } else if (e.target.innerHTML == "Contact"){
            contactModule();
        } else if (e.target.innerHTML == "Home"){
            homePage();
        }
    })
}

const setActive = (button) => {

    for (const button of navList){
        if (button !== this) {
          button.classList.remove("active");
        }
      };
    
      button.classList.add("active");
    
}

const removeElements = () => {
    const elements = document.querySelectorAll("#main > *")
    for (const ele of elements) {
        main.removeChild(ele)
    }
}

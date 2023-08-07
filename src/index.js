import './style.css';
import BgImage from './steak-dinner.jpg';

const heading = document.createElement("h1");
heading.textContent = "Big Joe's Bistro";
const content = document.getElementById("content")
content.appendChild(heading);

const nav = document.createElement("ul")
content.appendChild(nav);

const navItems = ["Home", "Menu", "Contact"];

for (let i = 0; i < navItems.length; i++){
    let navItem = document.createElement("li");
    navItem.innerHTML = navItems[i];
    nav.appendChild(navItem);
    navItem.addEventListener("click", function(){
        console.log(navItems[i])
    })
}


const myImage = new Image();
myImage.src = BgImage;
myImage.setAttribute("id", "bgimage")
content.appendChild(myImage);

const headline = document.createElement("h3");
headline.textContent = "Big Joe's has been serving french influenced comfort food since '92. We focus on sourcing only the freshest local produce to create seasonal dishes";
content.appendChild(headline);

const header = document.createElement("div");
content.appendChild(header);



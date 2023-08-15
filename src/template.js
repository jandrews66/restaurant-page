    function pageTemplate(){
        const header = document.createElement("div")
        header.setAttribute("id", "header")
        content.appendChild(header)
    
        const heading = document.createElement("h1");
        heading.textContent = "Big Joe's Bistro";
        header.appendChild(heading);
        
        const nav = document.createElement("ul")
        header.appendChild(nav);
        
        const navItems = ["Home", "Menu", "Contact"];
        
        for (let i = 0; i < navItems.length; i++){
            let navItem = document.createElement("li");
            navItem.innerHTML = navItems[i];
            navItem.setAttribute("id", navItems[i])
            nav.appendChild(navItem);
    
        }

        const main = document.createElement("div")
        main.setAttribute("id", "main")

        content.appendChild(main)

        const footer = document.createElement("div")
        footer.setAttribute("id", "footer")
        footer.textContent = "Big Joe's Bistro 2023"
        content.appendChild(footer)

        }
    

export default pageTemplate;
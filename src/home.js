const homePage = () => {
    const main = document.getElementById("main")
    
    const headline = document.createElement("h3");
    headline.textContent = "Big Joe's has been serving french influenced comfort food since '92. We focus on sourcing only the freshest local produce to create seasonal dishes.";
    main.appendChild(headline);
    
}

export default homePage;
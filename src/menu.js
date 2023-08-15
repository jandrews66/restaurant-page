const menuModule = () => {
    const headline = document.createElement("h3");
    headline.textContent = "Menu";
    main.appendChild(headline);

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv")
    main.appendChild(menuDiv);

    const createMenuItem = (name, description, price) => {
        const dish = document.createElement("div");
        dish.innerHTML = '<b>' + name + '</b>' + '<br>' + description + '<br>' + price;
        menuDiv.appendChild(dish)
    }
    
    const steakFrites = createMenuItem("Steak Frites", "6oz sirloin served with crispy french fries and a bernaise sauce", "$25")
    const coqAuVin = createMenuItem("Coq au Vin", "An old Coq braised in red wine, lardon and wild mushrooms served with a side of pomme puree", "$22")
    const nicoiseSalad = createMenuItem("Nicoise Salad", "A salad of tuna, new potoatoes, green beans, soft boiled egg with a lemon mustard vinegrette", "$21")
    const ratatouille = createMenuItem("Rataouille", "Summer vegetables cooked in a rich tomato sauce. Just like your grandmother used to make.", "$20" )
    const duckConfit = createMenuItem("Duck Confit", "Duck leg slow cooked in duck fat. Served with puy lentils and a duck jus", "$29")
}



export default menuModule;
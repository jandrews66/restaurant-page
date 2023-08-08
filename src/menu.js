const menuModule = () => {
    const headline = document.createElement("h3");
    headline.textContent = "Menu";
    content.appendChild(headline);

    const createMenuItem = (name, description, price) => {
        const dish = document.createElement("div");
        dish.innerHTML = name + '<br>' + description + '<br>' + price;
        content.appendChild(dish)
    }
    
    const steakFrites = createMenuItem("Steak Frites", "6oz sirloin served with crispy french fries and a bernaise sauce", "$25")
    const coqAuVin = createMenuItem("Coq au Vin", "An old Coq braised in red wine, lardon and wild mushrooms served with a side of pomme puree", "$22")
    const nicoiseSalad = createMenuItem("Nicoise Salad", "A salad of tuna, new potoatoes, green beans, soft boiled egg with a lemon mustard vinegrette", "$21")
}



export default menuModule;
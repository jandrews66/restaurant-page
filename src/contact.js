const contactModule = () => {
    const headline = document.createElement("h3");
    headline.textContent = "Contact";
    main.appendChild(headline);

    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contactDiv")
    main.appendChild(contactDiv);

    const phone = document.createElement("div")
    phone.innerHTML = "For reservations please call the restaurant. <br><br>Telephone: +1 (604) 838292 <br>Email: bigjoe@bigjoesbistro.com"
    contactDiv.appendChild(phone);

    const hours = document.createElement("div")
    hours.innerHTML = "Monday: Closed <br>Tuesday: 11am - 9pm <br>Wednesday: 11am - 9pm <br>Thursday: 11am - 9pm <br>Friday: 11am - 10pm <br>Saturday: 11am - 10pm <br>Sunday: 10:30am - 8pm";
    contactDiv.appendChild(hours);
}

export default contactModule;
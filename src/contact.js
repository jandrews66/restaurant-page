const contactModule = () => {
    const headline = document.createElement("h3");
    headline.textContent = "Contact";
    content.appendChild(headline);

    const phone = document.createElement("div")
    phone.innerHTML = "Telephone: +1 (604) 838292"
    content.appendChild(phone);

    const hours = document.createElement("div")
    hours.innerHTML = "Monday: Closed <br>Tuesday: 11am - 9pm <br>Wednesday: 11am - 9pm <br>Thursday: 11am - 9pm <br>Friday: 11am - 10pm <br>Saturday: 11am - 10pm <br>Sunday: 10:30am - 8pm";
    content.appendChild(hours);
}

export default contactModule;
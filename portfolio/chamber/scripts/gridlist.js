const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");


if (gridbutton) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });
    
    listbutton.addEventListener("click", showList);
    
    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
}

const url = "json/data.json";

// fetch data from json
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businessDirectory);
}

getBusinessData()

// display businesses
const displayBusinesses = (businessDirectory) => {
    const cards = document.querySelector('section.cards');

    businessDirectory.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a')
        let image = document.createElement('img');

        name.textContent = `${business.name}`;

        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;

        website.setAttribute('href', `${business.website}`);
        website.textContent = `Website`;
        
        image.setAttribute('src', business.imageurl);
        image.setAttribute('alt', `${business.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}
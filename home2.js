// Add this JavaScript code to handle the mobile click effect
const searchInput = document.querySelector("[data-search]")
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const toHideThem = document.querySelector("[to-hide-them]")
let users = []

searchInput.addEventListener("input", async (e) => {
    const value = e.target.value.toLowerCase();

    // Clear the user card container when a new search is initiated
    userCardContainer.innerHTML = '';

    try {
        // Fetch data from multiple JSON files based on the search query
        const [hospitalsData, pharmacydata,shopsdata,stationarydata,govtoffdata,bankdata] = await Promise.all([
            fetchAndParse("hospital.json"),
            fetchAndParse("pharmacy.json"),
            fetchAndParse("shop.json"),
            fetchAndParse("stationary.json"),
            fetchAndParse("govt.json"),
            fetchAndParse("bank.json")
            // Add more JSON files as needed
        ]);

        const allData = [...hospitalsData, ...pharmacydata,...shopsdata,...stationarydata,...govtoffdata,...bankdata]; // Concatenate data from different files

        users = allData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });

        // Filter and display user cards based on the search query
        users.forEach(user => {
            const isVisible =
                user.name.toLowerCase().includes(value) ||
                user.address.toLowerCase().includes(value);
            user.element.classList.toggle("hide", !isVisible);
        });

        // Toggle the "hide" class on the toHideThem element
        toHideThem.classList.toggle("hide", value !== '');

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

// Function to fetch and parse JSON data
async function fetchAndParse(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



pharmacyCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("pharmacy.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});


hospitalCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("hospital.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});

shopsCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("shop.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});

stationeryCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("stationary.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});

govtCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("govt.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});

bankCard.addEventListener("click", async function () {
    try {
        // Fetch data from hospital.json when the hospital card is clicked
        const hospitalData = await fetchAndParse("bank.json");

        // Clear the user card container
        userCardContainer.innerHTML = '';

        // Process the data and create user cards
        users = hospitalData.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const img = card.querySelector("[data-img]");

            header.textContent = user.name;
            body.textContent = user.address;
            img.src = user.img;
            userCardContainer.append(card);

            return { name: user.name, address: user.address, img: user.img, element: card };
        });
    } catch (error) {
        console.error("Error fetching hospital data:", error);
    }

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide");
});


/*
fetch("hospital.json")

    .then(res => res.json())

    .then(data => {

    users = data.map(user => {

        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body  =card.querySelector("[data-body]") 
        const img = card.querySelector("[data-img]")

        header.textContent = user.name
        body.textContent = user.address
        img.src = user.img
        userCardContainer.append(card)

        return { name: user.name, address: user.address, img:user.img,element: card }
    })

})

*/

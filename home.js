// Add this JavaScript code to handle the mobile click effect
const searchInput = document.querySelector("[data-search]")
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const toHideThem = document.querySelector("[to-hide-them]")
let users = []



searchInput.addEventListener("input", e=> {
    const value = e.target.value.toLowerCase()
    
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes (value) ||
            user.email.toLowerCase().includes (value)
            user.element.classList.toggle("hide", !isVisible)
    })

    // Toggle the "hide" class on the toHideThem element
    toHideThem.classList.toggle("hide", value !== '');   

    // Hide all user elements when nothing is typed in the search bar
    if (value === '') {
        users.forEach((user) => {
            user.element.classList.add("hide");
        });
    }
})

fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())

    .then(data => {

    users = data.map(user => {

        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body  =card.querySelector("[data-body]") 

        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)

        return { name: user.name, email: user.email, element: card }

    })

})

// Add this code to hide the user card container initially
userCardContainer.classList.add("hide");

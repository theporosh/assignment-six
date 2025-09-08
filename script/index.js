// Spinner Function
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("plant-container").classList.add("hidden");
    } else {
        document.getElementById("plant-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
};


// Get 🌴All categories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories") //promise of response
        .then((res) => res.json()) //promise of json data
        .then((json) => displayCategory(json.categories));
};

// Get 🌴All Plants

const loadAllTrees = () => {
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => displayAllTrees(data.plants));
};

// display 🌴All Plants

const displayAllTrees = (plants) => {
    // console.log(plants);

    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";

    // For Display all Trees
    plants.forEach(plant => {
        // console.log(plant);

        const card = document.createElement("div");
        card.innerHTML = `
           
             <div class="bg-white rounded shadow p-3 flex flex-col h-full">

                    <div class="h-32 bg-gray-200 rounded mb-3 overflow-hidden">
                     <img class="w-full h-full object-cover rounded" src="${plant.image}" alt="">
                    </div>

                    <h3 onclick="loadPlantDetail(${plant.id})" class="font-semibold text-sm mb-1">${plant.name}</h3>

                    <div class="flex-1">
                    <p class="text-xs text-gray-600 mb-2">${plant.description}</p>
                    </div>

                <div>    
                <div class="flex items-center justify-between mb-4">
                <span
                  class="inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded mb-2 geist-font">
                  ${plant.category}</span>
                <span class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
                </div>

                   <button onclick='addToCart(${JSON.stringify(plant)})'
                    class="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition text-sm">Add
                    to Cart</button>
                </div>    
             </div>
`;
        plantContainer.append(card);

    });

manageSpinner(false);

};

loadAllTrees();

// Active Class Function
const removeActive = () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    // console.log(categoryButtons);
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
};

// Get 🌴plants by categories

const loadPlantCategory = (id) => {
    manageSpinner(true);
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        // .then((data) => displayPlantCategory(data.plants));
        .then((data) => {
            removeActive(); // remove all active class
            const clickBtn = document.getElementById(`category-btn-${id}`);
            // console.log(clickBtn);
            clickBtn.classList.add("active"); // add active class
            displayPlantCategory(data.plants)
        });
};


// Get 🌴Plants Detail
const loadPlantDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    // console.log(url);
    const res = await fetch(url);
    const details = await res.json();
    displayPlantDetails(details.plants);
};

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }

// Display 🌴Plants Detail
const displayPlantDetails = (plant) => {
    console.log(plant);
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
        <div class="bg-white rounded shadow p-3 flex flex-col h-full">

                    <div class="h-50 rounded bg-gray-100 mb-3 overflow-hidden">
                        <h3 class="font-bold text-xl mb-1">${plant.name}</h3>
                        <img class="w-full h-full object-cover rounded" src="${plant.image}" alt="">
                    </div>

                <span
                class="text-xs mb-2 geist-font"><strong>Category:</strong>
                ${plant.category}</span>
                <span class="text-xs mb-2"><strong>Price:</strong> 
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}</span>
                <p class="text-xs text-gray-600"><strong>Description:</strong> ${plant.description}</p>
        </div>
    `;
    document.getElementById("plant_modal").showModal();

};

// Display 🌴plants by categories

const displayPlantCategory = (plants) => {
    // console.log(plants);
    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";


    // {
    //     "id": 7,
    //     "image": "https://i.ibb.co.com/FkH6MRhR/banyan-min.jpg",
    //     "name": "Banyan Tree",
    //     "description": "A majestic shade tree with a vast canopy and iconic aerial roots. Revered in many cultures, it offers shelter to countless birds and animals.",
    //     "category": "Shade Tree",
    //     "price": 1200
    // }


    plants.forEach(plant => {
        // console.log(plant);

        const card = document.createElement("div");
        card.innerHTML = `
           
             <div class="bg-white rounded shadow p-3 flex flex-col h-full">

                    <div class="h-32 bg-gray-200 rounded mb-3 overflow-hidden">
                     <img class="w-full h-full object-cover rounded" src="${plant.image}" alt="">
                    </div>

                    <h3 onclick="loadPlantDetail(${plant.id})" class="font-semibold text-sm mb-1">${plant.name}</h3>

                    <div class="flex-1">
                    <p class="text-xs text-gray-600 mb-2">${plant.description}</p>
                    </div>

                <div>    
                <div class="flex items-center justify-between mb-4">
                <span
                  class="inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded mb-2 geist-font">
                  ${plant.category}</span>
                <span class="font-semibold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
                </div>

                   <button onclick='addToCart(${JSON.stringify(plant)})'
                    class="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition text-sm">Add
                    to Cart</button>
                </div>    
             </div>


            
            `;

        plantContainer.append(card);
    });
    manageSpinner(false);
};


// Display 🌴All categories
const displayCategory = (trees) => {
    // console.log(trees);
    // 1. get the container & empty
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    // 2. get into every Categories
    for (let tree of trees) {
        // 3. create Element
        // console.log(tree);

        const btnUl = document.createElement("div");
        btnUl.innerHTML = `

        <button id="category-btn-${tree.id}" onclick="loadPlantCategory(${tree.id})"
        class="btn btn-soft btn-success w-full justify-start text-left text-gray-800 category-btn">${tree.category_name}</button>
        
    `;
        // 4. append into container
        categoryContainer.append(btnUl);
    }

};

loadCategories();






// Add to Cart Functionalities start here

const cart = []; // Cart state

const cartContainer = document.getElementById("cart-container");
const totalContainer = document.getElementById("cart-total");

// Add to Cart Handler
const addToCart = (plant) => {
    // Check if plant already exists in cart
    const existing = cart.find(item => item.id === plant.id);
    if (!existing) {
        cart.push({ ...plant, quantity: 1 });
        alert(`${plant.name} has been added to the cart`);
    } else {
        existing.quantity++;
        alert(`${plant.name} quantity increased in the cart`);
    }

    updateCartUI();
};

// Remove from Cart Handler
const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartUI();
    }
};

// Update Cart UI and Total
const updateCartUI = () => {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "bg-green-50 p-3 rounded-lg flex justify-between items-start mb-3";
        cartItem.innerHTML = `
            <div>
            <p class="text-sm font-semibold text-gray-800">${item.name}</p>
            <p class="text-sm text-gray-600"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.price}
             <i class="fa-solid fa-xmark fa-xs"></i>
             ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 text-sm">
            <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalContainer.innerText = `৳${total}`;
};




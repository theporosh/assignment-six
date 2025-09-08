
// Get 🌴All categories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories") //promise of response
        .then((res) => res.json()) //promise of json data
        .then((json) => displayCategory(json.categories));
};

// Get 🌴All Plants

const loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => displayAllTrees(data.plants));
};

// display 🌴All Plants

const displayAllTrees = (plants) => {
    console.log(plants);

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

                    <h3 class="font-semibold text-sm mb-1">${plant.name}</h3>

                    <div class="flex-1">
                    <p class="text-xs text-gray-600 mb-2">${plant.description}</p>
                    </div>

                <div>    
                <div class="flex items-center justify-between mb-4">
                <span
                  class="inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded mb-2 geist-font">
                  ${plant.category}</span>
                <span class="font-semibold">${plant.price}</span>
                </div>

                   <button
                    class="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition text-sm">Add
                    to Cart</button>
                </div>    
             </div>


            
            `;

        plantContainer.append(card);
    });



};

loadAllTrees();

// Get 🌴plants by categories

const loadPlantCategory = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayPlantCategory(data.plants));
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

                    <h3 class="font-semibold text-sm mb-1">${plant.name}</h3>

                    <div class="flex-1">
                    <p class="text-xs text-gray-600 mb-2">${plant.description}</p>
                    </div>

                <div>    
                <div class="flex items-center justify-between mb-4">
                <span
                  class="inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded mb-2 geist-font">
                  ${plant.category}</span>
                <span class="font-semibold">${plant.price}</span>
                </div>

                   <button
                    class="w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition text-sm">Add
                    to Cart</button>
                </div>    
             </div>


            
            `;

        plantContainer.append(card);
    });
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

        const btnUl = document.createElement("ul");
        btnUl.innerHTML = `
        <li>
        <button onclick="loadPlantCategory(${tree.id})"
        class="btn btn-soft btn-success w-full justify-start text-left hover:bg-green-700 text-gray-800">${tree.category_name}</button>
        </li>
    `;
        // 4. append into container
        categoryContainer.append(btnUl);
    }

};

loadCategories();




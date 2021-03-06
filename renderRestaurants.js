
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    let eachRest = '';

    for (let index = 0; index < restaurants.length; index++){
        let dollarSigns = '$'.repeat(restaurants[index].priceRating);
        eachRest += `
            <div class="d-flex flex-column align-items-start mr-2 p-1 rounded" style="background-color: rgb(230, 230, 230); width: 150px;">
            <div class="h4">${restaurants[index].name}</div>
            <div style="color: blue;">${restaurants[index].type}</div>
            <div style="color: red; font-weight: bold; font-size: 14px;">${dollarSigns}</div>
            </div>
        `
    }
    return `
        <div class="text-center mt-5 d-flex justify-content-center align-items-centr">
            ${eachRest}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}
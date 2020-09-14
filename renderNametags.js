
function renderNametags(nametags) {
    let htmlString = '';

    for (let i = 0; i < nametags.length; i++) {
        const nametag = nametags[i];
        htmlString += `
            <div class="text-center border rounded shadow mx-3 my-2" style="width: 300px;">
                <h3 class="p-3 bg-primary text-light rounded-top" >Hello, my name is:</h3>
                <p class="p-3">${nametag}</p>
            </div>
        `
    }

    return `
        <div class="d-flex-wrap justify-conttent-center mt-5">
            ${htmlString}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}
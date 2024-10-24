const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

//Capitalize the words for display
function capitalizeWords(string) {
    return string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function createSelectItem(products) {
    products.forEach(product => {
        let item = document.createElement("option");

        item.textContent =  capitalizeWords(product.name);

        item.setAttribute("value", product.name);

        document.querySelector("#product").appendChild(item);
    });
}

createSelectItem(products);
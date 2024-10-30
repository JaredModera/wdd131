const products = [
    {
      id: "hp-1888",
      name: "Home Page",
    },
    {
      id: "fc-2050",
      name: "Songs Page",
    },
    {
      id: "fs-1987",
      name: "Card Information",
    },
    {
      id: "ac-2000",
      name: "Adaptability",
    },
    {
      id: "jj-1969",
      name: "Color Palette",
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
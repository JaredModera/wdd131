const hamButton = document.querySelector("#button");
const navigation = document.querySelector(".navigation");

//toggle is adding the class if it doesnt exist or removing it if it does, so qhen qe click it adds the class to the elements listed and applies the styles we asing
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    document.querySelector('h1').classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {   
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },  
    {   
        templeName: "Jordan River Utah",
        location: "Jordan, Utah",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg"
    },  
    {   
        templeName: "Apia Samoa",
        location: "Pesega, Apia",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    }   
  ];
//link the navigations tab assosiated with old temples
//link the navigations tab assosiated with new temples
//same with the large and small
const homeLink = document.querySelector("#active");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
});
//add the eventListener so it grabs the temples below 1900
oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        //grab the string, seperate it by commas and the transfor the value to integers, then grab the index 0 which in this case is the year.
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples)
})

//add the eventListener so it grabs the temples above 2000
newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        //grab the string, seperate it by commas and the transfor the value to integers, then grab the index 0 which in this case is the year.
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(newTemples)
})

//now create the same but it only grabs temples by area
largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        const area = temple.area;
        return area > 90000;
    })
    createTempleCard(largeTemples)
})

smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        const area = temple.area;
        return area < 10000;
    })
    createTempleCard(smallTemples)
})

function createTempleCard(filteredTemples) {
    //set the content of the div to nothing
    document.querySelector(".img-grid").innerHTML = "";
    //apply the template only to the filtered items
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        //now assing the values to the elements we just created
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("width","400");
        img.setAttribute( "height","250");
        img.setAttribute("loading", "lazy");
        
        //now append the objects to the card object (which is a section)
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        //now append the card/section to the div with the class of img-grid
        document.querySelector(".img-grid").appendChild(card);
    });
}
createTempleCard(temples);
/*const templeTemplate = (temples) => {
    return `
    <h3>${temples.templeName}</h3>
    <p><span class="label">Location:</span>${temples.location}</p>
    <p><span class="label">Dedicated:</span>${temples.dedicated}</p>
    <p><span class="label">Size:</span>${temples.area} sq ft</p>
    <img src="${temples.imageUrl}" alt="${temples.templeName}" loading="lazy">`;
}

function renderTemple(temples) {
    const html = temples.map(templeTemplate);
    document.querySelector(".img-grid").innerHTML = html.join("");
}

renderTemple(temples);*/ //It was Worth a try :C pipipipipi

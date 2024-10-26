const hamButton = document.querySelector("#button");
const navigation = document.querySelector(".navigation");

//toggle is adding the class if it doesnt exist or removing it if it does, so qhen qe click it adds the class to the elements listed and applies the styles we asing
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    document.querySelector('h1').classList.toggle('open');
});

const songs = [  
    {   
        songName: "When I'm Sixty-Four",
        author: "The Beatles",
        genre: "Pop",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Dwight Schrute",
        imageUrl:"https://www.billboard.com/wp-content/uploads/2022/03/11.-The-Beatles-%E2%80%98Sgt.-Peppers-Lonely-Hearts-Club-Band-1967-album-art-billboard-1240.jpg?w=768",
        songUrl: "https://open.spotify.com/track/1NrbnHlR2BFREcyWXHIHip"
    },
    {   
        songName: "Something",
        author: "The Beatles",
        genre: "Soft Rock",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Dwight Schrute",
        imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=768",
        songUrl: "https://open.spotify.com/track/0pNeVovbiZHkulpGeOx1Gj"
    },
    {   
        songName: "I Want You (She's So Heavy)",
        author: "The Beatles",
        genre: "Progressive Rock Blues",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Michael Scott",
        imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=768",
        songUrl: "https://open.spotify.com/track/3Z25k4ZF6QENy2d9YatsM5"
    },
    {   
        songName: "The Chain",
        author: "Fleetwood Mac",
        genre: "Classic Rock",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Michael Scott",
        imageUrl: "https://www.billboard.com/wp-content/uploads/2022/03/43.-Fleetwood-Mac-%E2%80%98Rumours-1977-album-art-billboard-1240.jpg?w=768",
        songUrl: "https://open.spotify.com/track/7Dm3dV3WPNdTgxoNY7YFnc"
    },
    {   
        songName: "Between the Bars",
        author: "Elliott Smith",
        genre: "Indie Rock",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Pam Beesley",
        imageUrl: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRC5gyU2xns9poXp75WGyZ3cUrwuw8WmIr86sMyCtnp_0BXfkTcMHhDimGRu3JjDjRMImuoA4-8gVOoOdpb",
        songUrl: "https://open.spotify.com/track/52Bg6oaos7twR7IUtEpqcE"
    },
    {   
        songName: "Caravan",
        author: "John Coltrane",
        genre: "Modal Jazz",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Andy Lightyear",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/66/Whiplash_Soundtrack_Apple_Music.jpg",
        songUrl: "https://open.spotify.com/track/2Xtsv7BUMrNodQWH2JPOc0"
    },
    {   
        songName: "Cheek to Cheek",
        author: "Ella Fitzgerald & Louis Armstrong",
        genre: "Jazz, Traditional Pop",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Tyler The Creator",
        imageUrl: "https://m.media-amazon.com/images/I/816IUoz0hJL._UF1000,1000_QL80_.jpg",
        songUrl: "https://open.spotify.com/track/33jt3kYWjQzqn3xyYQ5ZEh"
    },
    {   
        songName: "Somethin' Stupid",
        author: "Frank Sinatra & Nancy Sinatra",
        genre: "Pop",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Jim Halpert",
        imageUrl: "https://i.scdn.co/image/ab67616d0000b2733e2331ff09f59ea3c87fe5d6",
        songUrl: "https://open.spotify.com/track/4feXcsElKIVsGwkbnTHAfV"
    },
    {   
        songName: "No Moon At All",
        author: "Jonah Jones Quartet",
        genre: "Jazz",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Creed Bratton",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6b/ea/ee/6beaee9f-a1fd-c75a-b283-d8e5766424aa/00724352455454.jpg/1200x1200bf-60.jpg",
        songUrl: "https://open.spotify.com/track/2Z6EyJu9q72XuPjgG6ZSIu"
    },
    {   
        songName: "Oh Qué Será?",
        author: "Willie Colón",
        genre: "Latin Salsa",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Kevin Malone",
        imageUrl: "https://i1.sndcdn.com/artworks-czUFuvI6qIMopw18-jwlz6g-t500x500.jpg",
        songUrl: "https://open.spotify.com/track/2n1MTLCis6qPSDKdr5XSDI"
    },
    {   
        songName: "Buscando Guayaba",
        author: "Willie Colón & Rubén Blades",
        genre: "Latin Salsa",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Stanley Hudson",
        imageUrl: "https://i.scdn.co/image/ab67616d0000b273d80568f980cdc7cef1f877a6",
        songUrl: "https://open.spotify.com/track/51pnSx6vfBzV8lkLLNFFpy"
    },
    {   
        songName: "Tanto Amor",
        author: "Escarlata & Los Rumberos",
        genre: "Latin Bolero",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Oscar Martinez",
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/55/43/f9/5543f936-ae09-d602-fd81-2f7f581dbfe9/198000948788.jpg/1200x1200bb.jpg",
        songUrl: "https://open.spotify.com/track/2DSBxnRi8Y1Tk4f0Am8pzA"
    },
    {   
        songName: "Don",
        author: "Miranda!",
        genre: "Electro-Pop",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit molestiae nihil dolore esse consequuntur blanditiis saepe vitae totam repellendus tempore exercitationem praesentium sint excepturi labore sed. Culpa sit possimus cupiditate tempora, molestiae sint eum placeat voluptatem reiciendis harum iure exercitationem amet perspiciatis nemo recusandae dolorum! Odio praesentium obcaecati asperiores.",
        reviewer: "Ryan Howard",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e0241ca8a8fdfcce2d6ff7f2d05",
        songUrl: "https://open.spotify.com/track/0WajUW5XINeraP2w0F3F8E"
    }
];

//link the navigations tab assosiated with old temples
//link the navigations tab assosiated with new temples
//same with the large and small
const allSongsLink = document.querySelector("#all-songs");
const popLink = document.querySelector("#pop");
const rockLink = document.querySelector("#rock");
const jazzLink = document.querySelector("#jazz");
const latinLink = document.querySelector("#latin");
const spanishLink = document.querySelector("#spanish");


allSongsLink.addEventListener("click", () => {
    createSongsCard(songs);
});

//add the eventListener so it grabs the pop songs
popLink.addEventListener("click", () => {
    const popSongs = songs.filter(song => {   
        const genre = song.genre;
        if (genre.includes("Pop")) {
            return genre;
        }
    });
    createSongsCard(popSongs)
});

//add the eventListener so it grabs the temples above 2000
rockLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        //grab the string, seperate it by commas and the transfor the value to integers, then grab the index 0 which in this case is the year.
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(newTemples)
})

//now create the same but it only grabs temples by area
jazzLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        const area = temple.area;
        return area > 90000;
    })
    createTempleCard(largeTemples)
})

latinLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        const area = temple.area;
        return area < 10000;
    })
    createTempleCard(smallTemples)
})

function createSongsCard(filteredSongs) {
    //set the content of the div to nothing
    document.querySelector(".song-grid").innerHTML = "";
    //apply the template only to the filtered items
    filteredSongs.forEach(song => {
        let card = document.createElement("section");
        let songName = document.createElement("h3");
        let author = document.createElement("p");
        let genre = document.createElement("p");
        let review = document.createElement("p");
        let reviewer = document.createElement("p");
        let songLink = document.createElement("a");
        let img = document.createElement("img");

        //now assing the values to the elements we just created
        songName.textContent = song.songName;
        author.innerHTML = `<span class="label">Song author/s:</span> ${song.author}`;
        genre.innerHTML = `<span class="label">genre:</span> ${song.genre}`;
        review.innerHTML = `<span class="label">review:</span> ${song.review}`;
        reviewer.innerHTML = `<span class="label">review by:</span> ${song.reviewer}`;
        songLink.innerHTML = `<span class="label">Listen On Spotify:</span> ${song.songUrl}`;
        img.setAttribute("src", song.imageUrl);
        img.setAttribute("alt", `${song.songName}`);
        img.setAttribute("width","200");
        img.setAttribute("loading", "lazy");
        // Set the URL for the song (replace with the actual song URL)
        songLink.href = song.songUrl; 
        // Set the text content of the link
        songLink.textContent = "Listen to the Song";
        songLink.target = "_blank";
        card.appendChild(songName);
        card.appendChild(genre);
        card.appendChild(author);
        card.appendChild(review);
        card.appendChild(reviewer);
        card.appendChild(songLink);
        card.appendChild(img);

        //now append the card/section to the div with the class of img-grid
        document.querySelector(".song-grid").appendChild(card);
    });
}
createSongsCard(songs);
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

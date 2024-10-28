const songInput = document.querySelector("#favsong");
const authorInput = document.querySelector("#favsong-author");
const descInput = document.querySelector("#favsong-desc");
const button = document.querySelector(".fav-button");
const list = document.querySelector("#songs-list");

let songsArray = getSongList() || [];

// Display songs when the page loads
songsArray.forEach(song => {
    displayList(song.song, song.author, song.description);
});

button.addEventListener("click", () => {
    // Check that the inputs arent empty or just whitespace
    if (songInput.value.trim() !== "" && 
        authorInput.value.trim() !== "" && 
        descInput.value.trim() !== "") {
        
        // display the song and description
        displayList(songInput.value, authorInput.value, descInput.value);
        
        songsArray.push({
            song: songInput.value,
            author: authorInput.value,
            description: descInput.value
        });
        
        setSongList();

        songInput.value = "";
        authorInput.value = "";
        descInput.value = "";

        songInput.focus();
    }
});

//capitalize the fisrt letter of each word
function capitalizeFirstOfEachWord(str) {
    return str
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}

function displayList(song, author, description) {
    let card = document.createElement("section");
    let songObjt = document.createElement("li");
    let autObjt = document.createElement("p");
    let descObjt = document.createElement("p");
    let deletebutton = document.createElement("button");

    songObjt.innerHTML = `<span class="label">Song:</span> <br> ${capitalizeFirstOfEachWord(song)}`;
    autObjt.innerHTML = `<span class="label">Song Author/s:</span> <br> ${capitalizeFirstOfEachWord(author)}`;
    descObjt.innerHTML = `<span class="label">Song Description/s:</span> <br> ${description}`;
    deletebutton.textContent = "x";
    deletebutton.classList.add("delete");

    card.append(songObjt);
    card.append(autObjt);
    card.append(descObjt);
    card.append(deletebutton);

    list.append(card);

    deletebutton.addEventListener("click", function () {
        list.removeChild(card);
        deleteSong(song);
        songInput.focus();
    });
}

// get the array from local storage
function setSongList() {
    localStorage.setItem('myFavSongList', JSON.stringify(songsArray));
}

// get the array from local storage
function getSongList() {
    return JSON.parse(localStorage.getItem('myFavSongList'));
}

function deleteSong(songName) {
    // Filter the song object so that it matches the song name
    songsArray = songsArray.filter(item => item.song !== songName);

    // update local storage
    setSongList(); 
}

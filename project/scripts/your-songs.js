const input = document.querySelector("#favchap");
const button = document.querySelector(".fav-button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() != "") {
        displayList(input.value);
        songsArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

//let so it can be re-asinged
let songsArray = getChapterList() || [];

songsArray.forEach(song => {
    displayList(songs);
});

function displayList(item) {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    li.textContent = item;
    deletebutton.textContent = "❌";
    deletebutton.classList.add("delete");
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(songsArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    songsArray = songsArray.filter(item => item !== chapter);
    setChapterList();
}
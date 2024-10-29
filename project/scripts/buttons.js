const hamButton = document.querySelector(".button");
const navigation = document.querySelector(".navigation");

//toggle is adding the class if it doesnt exist or removing it if it does, so qhen qe click it adds the class to the elements listed and applies the styles we asing
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    document.querySelector('h1').classList.toggle('open');
});

const genreButton = document.querySelector(".genre-button");
const genreNavigation = document.querySelector(".genre-navigation");

//toggle is adding the class if it doesnt exist or removing it if it does, so qhen qe click it adds the class to the elements listed and applies the styles we asing
genreButton.addEventListener("click", () => {
    genreNavigation.classList.toggle("open");
    genreButton.classList.toggle("open");
});
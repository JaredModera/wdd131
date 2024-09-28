myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
//Activity 1
/*favoriteFoods.forEach(funcion(food) {
    const food = document.createElement("li");
    document.querySelector("favorite-foods").appendChild(food);
});
//getting the html element ("ul")
const foodsElement = document.querySelector("#favorite-foods");
//create the fuction that appends the array elements into the ul qe selected above.
function createandAppendFoodItem(food) {
    //create the ("li") element that is going to contain the food to append later
    let favoriteFood = document.createElement("li");
    //assing the array food to the favorite food text content
    favoriteFood.textContent = food;
    //now we append the favorite food with an assinged value to the foodsElement element we selected
    foodsElement.appendChild(favoriteFood);
    //now the function is finished. what is left is to call it with the forEach.
}
//call the function createandAppendFoodItem with a forEach (if the array is inside of a "list" first we call the name of the list.theNameOfTheArray)
myInfo.favoriteFoods.forEach(createandAppendFoodItem);

//now with map
function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;//in this case it returns the value, does no append it.
}
//we create a variable for the map to be assinged, remember the map creates another array with the instrucctions we give.
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);

function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
}

foodsElement.innerHTML = foodListElements.join('');
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");

//------------------------------------------------------------------
//Activity 2
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
.map((food) => `<li>${food}</li>`)
.join("");

*/
//Readable code = maintainable code
//------------------------------------------------------------------
//Activity 3
//select the html element from the html document by its id
const favoriteFoodElement = document.querySelector("#favorite-foods");
const placesLivedElement = document.querySelector("#places-lived");

//Create a function that will take a food string and return that string embedded in some html.
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

//now a places template
/*
Use <dl> (Definition List) to group terms and their definitions.
Use <dt> (Definition Term) for the term itself.
Use <dd> (Definition Description) for the explanation or definition of that term.*/
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

//The function should transform our list by looping over it calling the template function once for each item in the list.
function htmlMarkup(list, template) {
    const htmlList = list.map(template);
    return htmlList.join(" ");
}//the map within is looping the list and the parameter template is the format in wich it will return each item on the list. the we return that but with a join to create a single string with a spache (" ").

//assing the value that the htmlMarkup returns to the element on the html that we selected before and now we just change the parameter values and templates and it works just fine.
favoriteFoodElement.innerHTML = htmlMarkup(myInfo.favoriteFoods, foodsTemplate);

placesLivedElement.innerHTML = htmlMarkup(myInfo.placesLived, placesTemplate);
//------------------------------------------------------------------

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//USING FOR
//separate the for values by a ; semicolon.
/*Initialization: let i = 0 initializes i to 0.
Condition: i < studentReport.length checks if i is less than the studentReport length.
Increment: i++ increments i by 1 after each iteration.*/
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}   

//SUING WHILE 
/*Initialization: let i = 0 sets up the loop control variable before the loop starts.
Condition: i < studentReport.length ensures the loop runs as long as i is less than studentReport.length.
Increment: i++ increments i by 1 after each iteration. */
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
    i++;
}

//USING FOREACH
/*element: The current element being processed in the array (student) in this case.
index (optional): The index of the current element.
array (optional): The entire array that is being iterated over. */  
studentReport.forEach(function(value) {
  if (value < LIMIT) {
    console.log(value);
  }
});

//USINF IN FOR... IN
/*key: The name of the current property or index (when used with arrays) "index" in this case.
object: The object or array being iterated over, (studentReport).*/
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index])
  }
}

/*produce the day names (Monday, Tuesday, Wednesday, etc.) 
this is th amount of days from today that we want to count, meaning, today is day is one of the 7 days of the week, so theres 6 remaining
of the next number of DAYS from today's date.*/
const n = 6;

//the constant is called aoutut because the element it selected is where the information will be displayed
//const output = document.getElementsByTagName("ul"); This didnt work beacuse i have more ul lements and i need it to be below the future days ul
const output = document.getElementById("#days"); //this didnt work either because i dont know XD but i fixed it on the last line with an alternative.

// Intl.DateTimeFormat Options are for the time of date we want to set a a setting, in this case, weekday and long, meaning "monday" instead of mon etc. and intl = (internationalization)
const options = {weekday: "long"}; // vs. short, etc.

//todays date
const today = new Date();

//now we take the "today" const and configure the type of date we want to be displayed (for that we will use the options const of before) 
let todayString = new Intl.DateTimeFormat("en-US", options).format(today);
//now send the format with a string to the html object that we selected from before.
document.getElementById("today").innerHTML = `Today is ${todayString}.`;

//next days 
for (let i = 1; i <= n; i++) {
  //set nextday to new Date() and later do the opperations to adjust the date o the days after today, example, today + i wich is 1 and so on until 6 so it add the next 6 days of the week.
  let nextDay = new Date();
  //now we set the date to be correct, we get the value from todays date and add 1. so if it was monday, now the date + 1 = tuesday. next time it would add 2, so now it will be wensday and so on. BUT thats the value, not yet the string.
  nextDay.setDate(today.getDate() + i);
  //now we set the string, using the "options" const we created before.
  let nextDayString = new Intl.DateTimeFormat("en-US", options).format(nextDay);
  //create the list item thats going to store the days.
  let item = document.createElement("li");
  //set the content of the element we just created (the next day string that contains the string with the day).
  item.textContent = nextDayString;
  //append the string to the output (the html ul element).
  document.querySelector("#days").appendChild(item);
}
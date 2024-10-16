let firstName = 'Antonia';
let lastName = 'Francesca';

//REGULAR FUNCTION
/*function fullName(first, last) {
    return `${first} ${last}`;
}

//ANONYMOUS FUNCTION
const fullName = function (first, last) {
    return `${first} ${last}`;
}
*/

//ARROW FUNCTION
const fullName = (first, last) =>  `${first} ${last}`;

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

console.log(fullName(firstName, lastName));     
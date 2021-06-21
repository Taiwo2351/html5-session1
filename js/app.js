// Select the element of interst by its id attribute
let btn; //variable declaration

btn = document.getElementById("btn");

btn.addEventListener("click", greetUser);

function greetUser() {
 alert("Hi, you're welcome to my website!");
}
// CODE EXPLAINED channel
const clear = document.querySelector(".clear");
const date = document.getElementById("date");
const list = document.getElementById("list");
const imput = document.getElementById("input");

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show today's date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
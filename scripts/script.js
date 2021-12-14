// JavaScript Document
// OBSERVER

var dropdownMenu = document.querySelector ("nav");

function menuOpenDicht(){
    document.documentElement.classList.remove("loading");
	dropdownMenu.classList.toggle("transitie_navigatie");

}

dropdownMenu.addEventListener("click", menuOpenDicht);


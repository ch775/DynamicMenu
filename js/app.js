//This makes an array variable of all the sections. Helps find how many we need to loop by.
const sections = document.getElementsByClassName("section");


//This makes a variable of the navigation area so we can add divs to it.
const navigation = document.querySelector("#navigation");

//This loops over the number of sections and ads a div with section name for each.
for (var i=0; i < sections.length; i++) {
    const newMenuItemDiv = document.createElement ('div'); //This creates a new div for menu
    const menuItemText = document.querySelectorAll(".menuItem")[i].firstChild.nodeValue; //This grabs the inner text from the sections h2 tag.
    const menuItem = newMenuItemDiv.innerHTML += menuItemText; //Adds text to new div
    navigation.insertAdjacentHTML('beforeend', menuItem); //This adds menu item to nav
};







//This makes an array variable of all the sections. Helps find how many we need to loop by.
const sections = document.getElementsByClassName("section");


//This makes a variable of the navigation area so we can add divs to it.
const navigation = document.querySelector("#navigation");

//This loops over the number of sections and ads a div with section name for each.
for (var i=0; i < sections.length; i++) {
    const newMenuItemDiv = document.createElement ('div'); //This creates a new div for menu
    newMenuItemDiv.classList.add("menuItem2");
    const menuItemText = document.querySelectorAll(".menuItem")[i].firstChild.nodeValue; //This grabs the inner text from the sections h2 tag.
    newMenuItemDiv.innerHTML = menuItemText;
    //newMenuItemDiv.innerHTML(menuItemText); //Adds text to new div
    navigation.append(newMenuItemDiv); //This adds menu item to nav
};



// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickWhenScroll()};

// Get the offset position of the navigation
let stick = navigation.offsetTop;

// Add the stick class to the navigation when you reach its scroll position. Remove stick when you leave the scroll position
function stickWhenScroll() {
  if (window.pageYOffset >= stick) {
    navigation.classList.add("stick")
  } else {
    navigation.classList.remove("stick");
  }
}




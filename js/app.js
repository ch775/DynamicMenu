//This makes an array variable of all the sections. Helps find how many we need to loop by.
const sections = document.getElementsByClassName("section");


//This makes a variable of the navigation area so we can add divs to it.
const navigation = document.querySelector("#navigation");

 //This makes a variable of the footer area so we can add divs to it.
 const footer = document.querySelector("#footer");


//This loops over the number of sections and ads a div with section name for each.
for (var i=0; i < sections.length; i++) {
    const newMenuItemDiv = document.createElement ('a'); //This creates a new a for menu
    newMenuItemDiv.classList.add("menuItem2");
    const menuItemText = document.querySelectorAll(".menuItem")[i].firstChild.nodeValue; //This grabs the inner text from the sections h2 tag.
    newMenuItemDiv.innerHTML = menuItemText;
    //newMenuItemDiv.innerHTML(menuItemText); //Adds text to new div
    navigation.append(newMenuItemDiv); //This adds menu item to nav
    
};

//This loops over the number of sections and ads a div with section name for each.
for (var i=0; i < sections.length; i++) {
    const newMenuItemDiv = document.createElement ('a'); //This creates a new a for menu
    newMenuItemDiv.classList.add("menuItem2");
    const menuItemText = document.querySelectorAll(".menuItem")[i].firstChild.nodeValue; //This grabs the inner text from the sections h2 tag.
    newMenuItemDiv.innerHTML = menuItemText;
    //newMenuItemDiv.innerHTML(menuItemText); //Adds text to new div
    footer.append(newMenuItemDiv); //This adds menu item to nav
    
};

//This ads the class to the first navigation element
const navFirst = document.querySelector(".menuItem2");
navFirst.classList.add("active");


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


//This loops over the number of sections and ads the link to it's appropriate section
for (var i=0; i < sections.length; i++) {
    const anchorTag = document.getElementsByClassName("menuItem2"); 
    const sections = document.getElementsByClassName("section");
    const sectionIDs = document.getElementsByClassName("section")[i].id;
    anchorTag[i].setAttribute('href', `#${sectionIDs}`);
};



function onScroll(event){
    var sectionsA = document.querySelectorAll('#navigation a');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    for( var i = 0; i < sectionsA.length; i++ ){
      var currLink = sectionsA[i]; 
      var val = currLink.getAttribute('href');
      var refElement = document.querySelector(val);
        if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
          document.querySelector('#navigation a').classList.remove('active');
          currLink.classList.add('active');
        }else{
           currLink.classList.remove('active');
         }
    }
    
    
                                                             
      
  };
  
  window.document.addEventListener('scroll', onScroll );



  

//Toggle menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (toggle) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
function toggleMenu() {
  if (menu.classList.contains("clicked")) {
      menu.classList.remove("clicked");
       
      // adds the menu (toggle) icon
      toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
  } else {
      menu.classList.add("active");
       
      // adds the close (x) icon
      toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
  }
}
/* Event Listener */

/* Activate Dropdown */

     
/* Close Dropdown From Anywhere */

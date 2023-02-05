function myFunction(x) {
    x.classList.toggle("change");
  }

function openToggleMenu() {
  let x = document.getElementById("myTopnav"); //this line grabs the element by its name
    if (x.className === "topnav") { //set condition
      x.className += "responsive"; //
    } else {
      x.className = "topnav";
    }
  }

function openDropdown() {
    let x = document.getElementById("dropdown"); //this line grabs the element by its name
      if (x.className === "dropdown") { //set condition
        x.className += "responsive"; 
      } else {
        x.className = "topnav";
      }
    }
  
    function openDropdown() {
      let x = document.getElementById("dropdown"); //this line grabs the element by its name
        console.log 'item-c'
      }
      
let language ={
  eng:{
    hi:"welcome everyone"
  }
  es:{
    hi:"bienveneidos todos"
  }
}
     
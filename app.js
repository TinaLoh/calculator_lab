var buttons = document.getElementsByClassName('button');

var buttons = document.querySelectorAll(".button")
console.dir(buttons)

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onlick = function() {
    console.log("You clicked a button")
    
  }
}

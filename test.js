// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Get the modal
var modal22 = document.getElementById("myModal22");

// Get the button that opens the modal
var btn22 = document.getElementById("myBtn22");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close22")[0];

// When the user clicks the button, open the modal
btn22.onclick = function() {
  modal22.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal22.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  //alert(event.target)

  if(event.target == modal22) {
    modal22.style.display = "none";
    }
  }

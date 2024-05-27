/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("mySidenav").style.display = "block";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("mySidenav").style.display = "none";
}
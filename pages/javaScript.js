/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown_school").classList.toggle("show_school");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn_school')) {
    var dropdowns = document.getElementsByClassName("dropdown-content_school");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_school')) {
        openDropdown.classList.remove('show_school');
      }
    }
  }
}

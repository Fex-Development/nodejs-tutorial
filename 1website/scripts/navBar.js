/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var navBar = document.getElementById("myTopnav");
    if (navBar.className === "topnav")
    {
        navBar.className += " responsive";
        navBar.classList.toggle("change");
    } else
    {
        navBar.className = "topnav";
    }
}

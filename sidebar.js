var sideNav = document.getElementById("mySidenav");
function openNav() {
    if (sideNav.style.width == "150px") {
      sideNav.style.width = "0";
    } else {
      sideNav.style.width = "100%";
    }
  }
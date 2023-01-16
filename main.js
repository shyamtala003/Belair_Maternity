let menu = document.getElementById("nav_links");
let menuTogglerBtn = document.querySelector(".nav-menu-icon");

menuTogglerBtn.addEventListener("click", () => {
  menu.classList.toggle("show_menu");
  let menuIcon = menuTogglerBtn.firstElementChild;

  if (menuIcon.getAttribute("src") === "./images/menu_icon.png") {
    menuIcon.setAttribute("src", "./images/close_icon.png");
  } else {
    menuIcon.setAttribute("src", "./images/menu_icon.png");
  }
});

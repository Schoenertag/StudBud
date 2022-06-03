const sidebar = document.getElementById("sidebarDisplay");
const sidebarMenuButton = document.getElementById("menuBtn");


sidebarMenuButton.addEventListener("click", () => {
//check if side bar is open
let sidebarOpen = sidebar.classList.contains("toggleOn");
 if (sidebarOpen) { //if open, close it
    sidebar.classList.remove("toggleOn");
  }
  else { //if closed, open it
    sidebar.classList.add("toggleOn");
  }

});
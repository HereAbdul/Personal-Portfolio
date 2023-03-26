// Sticky Navigation Menu JS Code
const nav = document.querySelector("nav");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Side NavIgation Menu JS Code
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
const navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// form validation
var UserName = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var msg = document.getElementById("massege");

var submit = 1;

function validation() {
  if (UserName.value == "") {
    document.getElementById("text-danger").innerHTML = "UserName Field is empty!";
    submit = 0;
  } else if (UserName.value.length < 3) {
    document.getElementById("text-danger").innerHTML =
      "Please Enter the Correct UserName!";
    submit = 0;
  } else {
    document.getElementById("text-danger").innerHTML = "";
    submit = 1;
  }
  if (email.value == "") {
    document.getElementById("text-danger2").innerHTML =
      "Please provide your Phone!";
    submit = 0;
  } else {
    document.getElementById("text-danger2").innerHTML = "";
    submit = 1;
  }
  if (email.value == "") {
    document.getElementById("text-danger3").innerHTML = "Email Field is empty!";
    submit = 0;
  } else {
    document.getElementById("text-danger3").innerHTML = "";
    submit = 1;
  }
  if (msg.value == "") {
    document.getElementById("text-danger4").innerHTML =
      "Enter your Massege For Me!";
    submit = 0;
  } else if (msg.value.length < 10) {
    document.getElementById("text-danger4").innerHTML =
      "Please Write your Massege in maximum words";
  } else {
    document.getElementById("text-danger4").innerHTML = "";
    submit = 1;
  }
  if (submit) {
    return true;
  } else {
    return false;
  }
}
// change to dark mood

const icon = document.getElementById('icon');
icon.onclick=()=>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains('dark-theme')){
    icon.src="Images/sun.png"
  }else{
    icon.src="Images/moon.png"
  }
}
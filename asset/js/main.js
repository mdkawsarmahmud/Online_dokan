//nav bar active

const activepage=window.location.pathname;
console.log(activepage);
// const navlinks=document.querySelectorAll('.nav-link').forEach(link=> {
//   if(link.href.includes('${activepage}')){
//     // link.classList.add("active");
//     console.log("hi")
//   }
// })

//coundown
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  // let futureDate = new Date("6 February 2024");
  let currentDate = new Date();
  let myDate = currentDate; //clock
  // let myDate = futureDate - currentDate;//timer

  // let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  // let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  // let min = Math.floor(myDate / 1000 / 60) % 60;
  // let sec = Math.floor(myDate / 1000) % 60;

  // dayItem.innerHTML = days;
  // hoursItem.innerHTML = hours;
  // minItem.innerHTML = min;
  // secItem.innerHTML = sec;
  // console.log(myDate);

  // clock time
  dayItem.innerHTML = currentDate.getDate();
  hoursItem.innerHTML = currentDate.getHours();
  minItem.innerHTML = currentDate.getMinutes();
  secItem.innerHTML = currentDate.getSeconds();
};
countDown();
setInterval(countDown, 1000);

// Scrool back top

function scrollTopBack() {
  let scrollTopButton = document.querySelector("#scrollup");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}
scrollTopBack();

// nav hite when click

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

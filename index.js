"use strict";

const menuButton = document.querySelector(".menuButton");
const input = menuButton.querySelector("input");

input.addEventListener("click", function () {
    const sideBar = document.querySelector(".sideBar");
    if (
        sideBar.style.transform === "" ||
        sideBar.style.transform === "translateX(-100%)"
    ) {
        sideBar.style.transform = "translateX(0%)";
    } else {
        sideBar.style.transform = "translateX(-100%)";
    }
    console.log(sideBar.style.transform);
});

"use strict";

const menuButton = document.querySelector(".menuButton");
const input = menuButton.querySelector("input");

input.addEventListener("click", function () {
    const sideBar = document.querySelector(".sideBar");
    if (
        sideBar.style.transform === "" ||
        sideBar.style.transform === "translateX(-100%)"
    ) {
        this.style.position = "fixed";
    } else {
        this.style.position = "";
    }
    console.log(this.style.position);
});

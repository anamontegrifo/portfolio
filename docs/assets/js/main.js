"use strict";const navButtons=document.querySelectorAll(".js-button"),navSection=document.querySelector(".js-nav"),handleToogleNav=n=>{navSection.classList.contains("hidden")?navSection.classList.remove("hidden"):navSection.classList.add("hidden")};for(const n of navButtons)n.addEventListener("click",handleToogleNav);
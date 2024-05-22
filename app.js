const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";
const headOne = document.createElement("h1");
headOne.innerText = "hey what's up?";
mainEl.append(headOne);
mainEl.classList.add("flex-ctr");

const topMenueEl = document.getElementById("top-menu");
topMenueEl.style.height = "100%";
topMenueEl.style.background = "var(--top-menu-bg)"
topMenueEl.classList.add("flex-around");

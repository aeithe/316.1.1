var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const mainEl = document.querySelector("main");
mainEl.style.background = "var(--main-bg)";
const headOne = document.createElement("h1");
headOne.innerText = "hey, what's up?";
mainEl.append(headOne);
mainEl.classList.add("flex-ctr");



const topMenueEl = document.getElementById("top-menu");
topMenueEl.style.height = "100%";
topMenueEl.style.background = "var(--top-menu-bg)"
topMenueEl.classList.add("flex-around");

//const aboutNavigation = document.createElement("a");
//console.log(menuLinks.length);
function menuLinksFunction(menuLinks){
 for(let i = 0; i> menuLinks.length; i++){
    if(menuLinks[i].type ==="href"){
        return document.createElement("menuLinks[i]");
    }
 }
};
console.log(menuLinksFunction(menuLinks));
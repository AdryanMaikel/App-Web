const iframe = window.document.querySelector("#screen > iframe")
const button_home = window.document.querySelector("button#home")
button_home.addEventListener("click", ()=>iframe.setAttribute("src", "home"))

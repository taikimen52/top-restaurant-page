import "./styles.css";
import homeRendering from "./home.js" ;
import menuRendering from "./menupage.js";
import contactRendering from "./conatct.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeRendering();

// DOM（#content内）をリセットする
function resetContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

// イベントリスナーを追加
homeBtn.addEventListener("click", ()=>{
    resetContent();
    homeRendering();
})

menuBtn.addEventListener("click", ()=>{
    resetContent();
    menuRendering();
})

contactBtn.addEventListener("click", ()=>{
    resetContent();
    contactRendering();
})
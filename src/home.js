import Shopinfo from "./shopinfo.js"
console.log(Shopinfo);

export default homeRendering;

// Homeタブのコンテンツ生成、店舗情報はshopinfo.jsから取得する

const content = document.querySelector("#content");

function homeRendering() {
    for(let k of Object.keys(Shopinfo)) {
        const el = document.createElement("p");
        el.setAttribute("class", "info");
        el.setAttribute("id", `${k}`)
        el.innerText = Shopinfo[k];
        content.appendChild(el);
    }
}


import menuList from "./menulist.js";

export default menuRendering;

const content = document.querySelector("#content");

function menuRendering() {
    const div = document.createElement("div");
    div.setAttribute("class", "menu");

    const title = document.createElement("h1");
    title.setAttribute("class", title);
    title.innerText = "メニュー";
    div.appendChild(title);

    // menuList配列から各商品情報を格納するdivを生成
    for(let i = 0; i < menuList.length; i++) {
        const dish = document.createElement("div") 
        dish.setAttribute("class", "plate");

        // menuList配列内の各商品オブジェクト内のキーを選択してpタグに追加
        for(let k of Object.keys(menuList[i])) {
            const p = document.createElement("p");
            p.setAttribute("class", k);

            // 料金データのみ数値なのでコンマ区切り文字列に変換
            if(k === "price") {
                const value = menuList[i][k];
                p.innerText = `${value.toLocaleString()}円`
            }else {
                p.innerText = menuList[i][k];
            }

            dish.appendChild(p);
        }
        div.appendChild(dish);
    }
    content.appendChild(div);
}
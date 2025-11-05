const content = document.querySelector("#content");

function contactRendering() {
	const div = document.createElement("div");
	div.setAttribute("class", "contact");
	div.innerHTML = `
            <h1>コンタクト</h1>
            <form action="">
                <label for="name">お名前</label>
                <input type="text" id="name" name="name">
                
                <label for="mail">メールアドレス</label>
                <input type="email" id="mail" name="mail">
                
                <label for="message">メッセージ</label>
                <input type="text" id="message" name="message">

                <input type="submit" value="送信する">
            </form>
        `;

	content.appendChild(div);
}

export default contactRendering;

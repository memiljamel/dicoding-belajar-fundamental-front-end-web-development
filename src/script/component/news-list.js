import "./news-item.js";

class NewsList extends HTMLElement {
	constructor() {
		super();
		this._shadowDOM = this.attachShadow({mode: "open"});
	}

	set news(news) {
		this._news = news;
		this.render();
	}

	render() {
		this._shadowDOM.innerHTML = "";

		this._news.forEach(news => {
			const newsItemElement = document.createElement("news-item");
			newsItemElement.news = news;
			this._shadowDOM.appendChild(newsItemElement);
		})
	}

	renderError(message) {
        this._shadowDOM.innerHTML = `
        <style>
			.placeholder {
				margin: 0;
			    font-weight: lighter;
			    color: rgba(0,0,0,0.5);
			    -webkit-user-select: none;
			    -moz-user-select: none;
			    -ms-user-select: none;
			    user-select: none;
			}
		</style>
        `;

        this._shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
	}
}	

customElements.define("news-list", NewsList);
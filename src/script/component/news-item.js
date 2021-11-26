class NewsItem extends HTMLElement {
	constructor() {
		super();
		this._shadowDOM = this.attachShadow({mode: "open"});
	}

	set news(news) {
		this._news = news;
		this.render();
	}

	render() {
        this._shadowDOM.innerHTML = `
        <style>
			* {
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}

			:host {
			    display: block;
			    margin-bottom: 18px;
			    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			    border-radius: 10px;
			    overflow: hidden;
			}

			a {
				text-decoration: none;
				color: black;
			}

			.fan-art-news {
			    width: 100%;
			    max-height: 300px;
			    object-fit: cover;
			    object-position: center;
			}

			.news-info {
			    padding: 24px;
			}

			.news-info > h2 {
			    font-weight: lighter;
			    margin-bottom: 10px;
			}

			.news-info > span {
				font-size: 14px;
				color: rgba(0, 0, 0, .54);
			}

			.news-info > p {
			    margin-top: 10px;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 10; /* number of lines to show */
			}
        </style>

        <a href="${this._news.url}" target="_blank">
	        <img class="fan-art-news" src="${this._news.urlToImage}" alt="Fan Art">
			<div class="news-info">
				<h2>${this._news.title}</h2>
				<span>${this._news.source.name}</span>
				<p>${this._news.description}</p>
			</div>
        </a>`;
	}
}

customElements.define("news-item", NewsItem);
class AppBar extends HTMLElement {
	constructor() {
		super();
		this._shadowDOM = this.attachShadow({mode: "open"});
	}

	connectedCallback() {
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
			    width: 100%;
			    background-color: cornflowerblue;
			    color: white;
			    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			}

			h2 {
			    padding: 16px;
			}
		</style>

		<h2>News Finder</h2>
		`;
	}
}

customElements.define("app-bar", AppBar);

export default AppBar;
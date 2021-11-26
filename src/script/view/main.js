import "../component/news-list.js";
import SearchBar from "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const newsListElement = document.querySelector("news-list");

    const onButtonSearchClicked = () => {
        DataSource.searchNews(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        newsListElement.news = results;        
    };

    const fallbackResult = message => {
        newsListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
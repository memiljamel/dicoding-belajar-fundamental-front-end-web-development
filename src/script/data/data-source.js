class DataSource {
    static searchNews(keyword) {
        return fetch(`https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=4f94350fafbf49288484c1c9d4f74bad`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.articles) {
                return Promise.resolve(responseJson.articles);
            } else {
                return Promise.reject(`${keyword} is not found.`);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
}

export default DataSource;
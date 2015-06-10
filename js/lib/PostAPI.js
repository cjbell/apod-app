var API_URL = "http://apod-api.dev/posts";

var PostAPI = {

  getPostsByPage(pageNumber) {
    pageNumber = pageNumber || 1;

    return fetch(`${API_URL}?page=${pageNumber}`)
      .then((response) => response.json());
  }

}

module.exports = PostAPI;
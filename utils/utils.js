const axios = require('axios')

const utilObj = {}

utilObj.whatpage = 1;
utilObj.articles = [];
utilObj.reqUrl = ''
utilObj.totalResults = 1
utilObj.searchTerm = undefined
utilObj.pageNumber = 1
utilObj.numofPages = 4
utilObj.apiKey = process.env.API_KEY

utilObj.getArticles = async function() {
    try {
      const response = await axios.get(
        utilObj.reqUrl
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
  
utilObj.articlesToArray = async function(arts){
    utilObj.articles = []
      try {
        utilObj.articles = []
        arts = await utilObj.getArticles();
        if (arts.totalResults != null){
          utilObj.totalResults = arts.totalResults
        }
          for (let i = 0; i < arts.articles.length; i++) {
            if(arts.articles[i].url != null){
              if(arts.articles[i].urlToImage == null){
              arts.articles[i].urlToImage = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
              utilObj.articles.push(arts.articles[i]);
          } else {
              utilObj.articles.push(arts.articles[i]);
          }
          }
            }
          
      } catch (err) {
        console.error(err)
      }
    }
  
module.exports = utilObj
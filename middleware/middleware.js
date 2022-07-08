const utils = require('../utils/utils.js')
const middlewareObj = {}

middlewareObj.categoryMiddleware = async function (req, res, next) {
    if (req.params.category !== undefined){
        utils.whatPage = '&category=' + req.params.category
        utils.reqUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=21" + '&category='+ req.params.category + utils.apiKey
        await utils.articlesToArray();
        next();
      } else {
        utils.whatPage = undefined;
        utils.reqUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=21&apiKey=' + utils.apiKey
        await utils.articlesToArray();
        next();
      }
}

middlewareObj.searchMiddleware = async (req, res, next) => {
    if(utils.searchTerm == undefined){
      utils.searchTerm = req.body.search
    } else if(utils.searchTerm != req.body.search && req.body.search != undefined){
      utils.searchTerm = req.body.search
    }
    utils.reqUrl = "https://newsapi.org/v2/everything?pageSize=21&q=" + utils.searchTerm + '&page=' + utils.pageNumber + utils.apiKey
    await utils.articlesToArray();
    next();
  }

module.exports = middlewareObj
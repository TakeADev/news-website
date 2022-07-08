const express = require('express'),
    router = express.Router(),
    middleware = require('../middleware/middleware'),
    utils = require('../utils/utils')

router.post('/', middleware.searchMiddleware, (req,res) => {
    pageNumber = 1
    res.redirect('/search')
  })
  
  router.get("/", middleware.searchMiddleware, (req, res) => {
    res.render('search.ejs', {article: utils.articles, totalResults: utils.totalResults, searchTerm: utils.searchTerm, pageNumber: utils.pageNumber, numofPages: utils.numofPages})
  })
  
  router.get("/nextpage", (req, res) => {
    if(utils.pageNumber < utils.numofPages){
      utils.pageNumber++; 
    }
    res.redirect('/search')
  })
  
  router.get('/previouspage', (req, res) => {
    if(utils.pageNumber > 1){
      utils.pageNumber--
    }
    res.redirect('/search')
  })

  module.exports = router
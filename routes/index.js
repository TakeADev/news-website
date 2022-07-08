const express = require('express'),
    router = express.Router(),
    middleware = require('../middleware/middleware'),
    utils = require('../utils/utils')

    router.get("/", middleware.categoryMiddleware, (req, res) => {
        res.render("index.ejs", { article: utils.articles });
      });

module.exports = router
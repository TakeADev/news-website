const express = require('express'),
    router = express.Router(),
    middleware = require('../middleware/middleware'),
    utils = require('../utils/utils')

    Object.defineProperty(String.prototype, 'capitalize', {
        value: function() {
          return this.charAt(0).toUpperCase() + this.slice(1);
        },
        enumerable: false
      });

router.get('/:category', middleware.categoryMiddleware, (req, res) => {
    utils.whatPage = '&category=' + req.params.category
    res.render("category.ejs", { article: utils.articles, category: req.params.category.capitalize() });
  });

module.exports = router
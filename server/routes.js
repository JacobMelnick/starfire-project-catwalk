const controller = require('./controllers');
var router = require('express').Router();

router.get('/products/:product_id', controller.products.get);
router.get('/qa/questions', controller.questions.get);

router.get('/reviews/:product_id/:page/:count/:sort', controller.reviews.get);

router.get('/reviews/meta/:product_id', controller.reviews.getMeta)

router.get('/products/:product_id/styles', controller.products.getImgs);

module.exports = router;
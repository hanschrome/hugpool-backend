var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);

    res.json({
        id: "5555",
        kisses: 1,
        hugs: 1
    });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.json({
        id: "5555",
        kisses: 0,
        hugs: 0
    });
});

/* GET users listing. */
router.put('/:id', function(req, res, next) {
    console.log('Url parameters are:', req.params);
    console.log('Body information is', req.body);

    res.json({
        id: req.params.id,
        kisses: req.body.kisses,
        hugs: req.body.hugs
    });
});

module.exports = router;

var express = require ('express');
var router = require ('express').Router ()

router.get ('/', function (req, res) {
    res.sendfile ('layouts/posts.html')
})
                // points to the current file's directory (__dirname)
router.use (express.static (__dirname + '/../assets'))

module.exports = router
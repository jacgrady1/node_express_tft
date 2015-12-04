var express = require('express');
var router = express.Router();

var data = require('../data/data.json');
var courses = data.courses;
var feedbacks = data.feedbacks;
var lecturers = data.lecturers;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        courses: courses,
        feedbacks: feedbacks,
        lecturers: lecturers,
        title: "TFT"});
});

router.get('/course/:id*', function(req, res, next) {
    var id = req.params.id;
    var course = courses[0];
    var arrayLength = courses.length;
    for (var i = 0; i < arrayLength; i++) {
        if (id==courses[i].id){
            course = courses[i];
        }
    }
    res.render('course', {
        course: course,
        title: "course"
    });
});

module.exports = router;

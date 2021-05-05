const express = require("express");
const router = express.Router();

router.get("/", function(request, response) {
    let Course = require("../models/course");
    console.log("query string is ");
    console.log(request.query);
    if (Object.keys(request.query).length != 0) {
        console.log("request with query string was sent");
        let courseModel = new Course();

        courseModel.setCode(request.query.code);
    courseModel.setTitle(request.query.title);
    courseModel.setTerm(request.query.term);
    courseModel.setInstructor(request.query.instructor);

    console.log(courseModel.getCode());
    console.log("course data object is ");
    console.log(courseModel);
    response.render("details", { theCourse: courseModel });
} else {
    console.log("request with no query string was sent");
    let path = process.cwd();
    console.log("path from where node was started" + path);

    response.render("details", { message: "No course details available!" });
}
});

module.exports = router;










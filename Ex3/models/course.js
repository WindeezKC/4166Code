//var Course = {CourseID: 4166, Title: 'Network-Base Application Development', Term: 'Spring 2020', Instructor: 'Dr. Nadia Najjar'};
var Course = function(CourseID,  Title, Term, Instructor) {
var CourseModel = {CourseID: CourseID, Title: Title, Term: Term, Instructor: Instructor};
CourseID='4166';
Title='Network-based App Developemnt';
Term='Spring 2020';
Instructor='Dr. Nadia Najjar';
return CourseModel;
};
//Return the course model data with the appropriate entries

module.exports.Course = Course;

var form = document.getElementById('resume-form');
var resumeDiv = document.getElementById('resume');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    // Dynamically update resume
    resumeDiv.innerHTML = "\n    <h2>".concat(name, "</h2>\n    <p><strong>Email:</strong> ").concat(email, " | <strong>Phone:</strong> ").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p><strong>").concat(degree, "</strong> - ").concat(institution, "</p>\n    \n    <h3>Skills</h3>\n    <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n    \n    <h3>Work Experience</h3>\n    <p><strong>").concat(jobTitle, "</strong> at ").concat(company, "</p>\n  ");
});

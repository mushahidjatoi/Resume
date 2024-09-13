const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDiv = document.getElementById('resume') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent page reload

  // Capture form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const institution = (document.getElementById('institution') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;

  // Dynamically update resume
  resumeDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    
    <h3>Education</h3>
    <p><strong>${degree}</strong> - ${institution}</p>
    
    <h3>Skills</h3>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    
    <h3>Work Experience</h3>
    <p><strong>${jobTitle}</strong> at ${company}</p>
  `;
});

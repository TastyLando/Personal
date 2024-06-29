const username = 'TastyLando';

const endpoint = `https://api.github.com/users/${username}/repos`;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById('projects-container');
    data.forEach(project => {
      const projectBox = document.createElement('div');
      projectBox.classList.add('project-box');
      projectBox.innerHTML = `
        <h3><a href="${project.html_url}" target="_blank">${project.name}</a></h3>
        <p>${project.description}</p>
      `;
      projectsContainer.appendChild(projectBox);
    });
  })
  .catch(error => console.error('Error fetching projects:', error));

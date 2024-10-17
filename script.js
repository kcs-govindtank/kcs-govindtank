// Add project details dynamically (example)
const projectGrid = document.querySelector('.project-grid');

const projects = [
    {
        name: 'Project Name 1',
        description: 'Short description of project 1',
        link: 'https://example.com' // Optional project link
    },
    // Add more projects here
];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-item');

    projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
    `;

    projectGrid.appendChild(projectElement);
});

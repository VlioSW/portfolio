const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

function filterProjects(attribute) {
    projects.forEach(project => {
        if (attribute === "tous" || project.getAttribute('data-attribute') === attribute) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const attribute = button.getAttribute('data-attribute');
        filterProjects(attribute);
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Requiere incluir particles.js (https://github.com/VincentGarreau/particles.js)
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#000000" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true }
            }
        });
    }
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Uso: Agrega botones en HTML con onclick="filterProjects('quantum')"

// Requiere MathJax (https://www.mathjax.org/)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ['\\(','\\)'] ],
                displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
                processEscapes: true
            },
            CommonHTML: { scale: 90 }
        });
    }
});

function typeWriter(elementId, text, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    element.innerHTML = '';
    typing();
}

// Uso al cargar la página:
document.addEventListener('DOMContentLoaded', function() {
    typeWriter('main-title', 'Tu Nombre | Física Cuántica & Ingeniería');
});

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');
        data.forEach(project => {
            container.innerHTML += `
                <div class="project-card ${project.category}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}">Ver detalles</a>
                </div>
            `;
        });
    });
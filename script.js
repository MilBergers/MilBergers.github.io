document.addEventListener('DOMContentLoaded', function() {
    fetch('projecten.json')
        .then(response => response.json())
        .then(data => {
            const projectenLijst = document.getElementById('projectenLijst');
            data.projecten.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `
                    <h2>${project.titel}</h2>
                    <p>${project.korteOmschrijving}</p>
                    <p>Technologieën: ${project.technologieen.join(', ')}</p>
                    <img src="${project.afbeelding}" alt="${project.titel}" style="width: 15rem; max-width: 400px;">
                `;
                projectenLijst.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Fout bij het ophalen van de projecten:', error));
});

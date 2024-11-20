function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção correspondente
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Exibe a seção inicial (Home) ao carregar
window.onload = function() {
    showSection('home');
};

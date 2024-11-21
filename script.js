//Alerta de boas-vindas apenas na primeira visita
window.onload = function () {
    if (!localStorage.getItem('visited')) {
        alert('Bem-vindo ao nosso site! Estamos felizes em ter você aqui.');
        localStorage.setItem('visited', 'true');
    }
};

//Para mostrar as  sections
function showSection(sectionId) {
    // Oculta todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 300);
    });

    // Mostra a seção correspondente
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        setTimeout(() => {
            activeSection.style.display = 'block';
            activeSection.classList.add('visible');
        }, 300);
    }

    // Atualiza o estado ativo do menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.id === `nav-${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Exibe a seção inicial ao carregar
window.onload = function () {
    showSection('home');
};

// Gerencia cliques no menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita recarregar a página
        const sectionId = this.id.replace('nav-', '');
        showSection(sectionId);
    });
});

// Função para alternar entre modo claro e modo escuro
function toggleDarkMode() {
    // Alterna a classe "dark-mode" no corpo da página
    document.body.classList.toggle('dark-mode');

    // Alterna o ícone do botão de lua para sol
    const icon = document.getElementById('dark-mode-toggle').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon');  // Remove o ícone de lua
        icon.classList.add('bi-sun');      // Adiciona o ícone de sol
    } else {
        icon.classList.remove('bi-sun');   // Remove o ícone de sol
        icon.classList.add('bi-moon');     // Adiciona o ícone de lua
    }
}

// Adiciona o evento de clique no botão para ativar/desativar o modo escuro
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);

//Para a Validação do formulário
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    document.getElementById('nome-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('mensagem-error').textContent = '';

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var isValid = true;

    // Validação de Nome
    if (nome.trim() === '') {
        document.getElementById('nome-error').textContent = 'O nome é obrigatório.';
        isValid = false;
    }

    // Validação de E-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'O e-mail é obrigatório.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Validação de Mensagem
    if (mensagem.trim() === '') {
        document.getElementById('mensagem-error').textContent = 'A mensagem é obrigatória.';
        isValid = false;
    }

    // Se tudo estiver válido, enviar o formulário
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('contact-form').reset();
    }
});

// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento onde a mensagem será exibida
    const welcomeDiv = document.getElementById('welcome-message');

    // Verifica se o nome do usuário já está armazenado no localStorage
    let userName = localStorage.getItem('userName');

    if (!userName) {
        // Se não estiver, solicita o nome do usuário
        userName = prompt('Olá! Qual é o seu nome?');

        if (userName && userName.trim() !== '') {
            // Armazena o nome no localStorage
            localStorage.setItem('userName', userName);
        } else {
            // Define um nome padrão se o usuário não inserir nada
            userName = 'Visitante';
        }
    }

    // Exibe a mensagem de boas-vindas
    welcomeDiv.textContent = `Bem-vindo(a), ${userName}!`;
    // Seleciona o botão de alterar nome
const changeNameBtn = document.getElementById('change-name-btn');

changeNameBtn.addEventListener('click', function() {
    // Solicita um novo nome
    let newName = prompt('Qual é o seu novo nome?');

    if (newName && newName.trim() !== '') {
        // Atualiza o nome no localStorage
        localStorage.setItem('userName', newName);
        // Atualiza a mensagem de boas-vindas
        welcomeDiv.textContent = `Bem-vindo(a), ${newName}!`;
    } else {
        alert('Por favor, insira um nome válido.');
    }
});
});

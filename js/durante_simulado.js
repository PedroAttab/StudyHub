// durante_simulado.js
document.addEventListener('DOMContentLoaded', function() {
    // Define o tempo inicial em segundos (5 horas = 18000 segundos)
    const initialTime = 5 * 60 * 60; // 5 horas em segundos
    let timeRemaining = initialTime;

    // Seleciona o elemento do cronômetro
    const timerElement = document.getElementById('timer');

    // Função para formatar o tempo no formato HH:MM:SS
    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return [
            hrs.toString().padStart(2, '0'),
            mins.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0')
        ].join(':');
    }

    // Atualiza o cronômetro na tela
    function updateTimer() {
        timerElement.textContent = formatTime(timeRemaining);
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            // Tempo esgotado, redireciona para a página de resultados
            alert('O tempo do simulado acabou!');
            window.location.href = 'resultado_simulado_enem.html';
            clearInterval(timerInterval); // Para o cronômetro
        }
    }

    // Inicia o cronômetro
    updateTimer(); // Atualiza imediatamente para evitar atraso de 1 segundo
    const timerInterval = setInterval(updateTimer, 1000);
});

// durante_simulado.js
document.addEventListener('DOMContentLoaded', function() {
    const initialTime = 5 * 60 * 60; 
    let timeRemaining = initialTime;

    const timerElement = document.getElementById('timer');

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

    function updateTimer() {
        timerElement.textContent = formatTime(timeRemaining);
        if (timeRemaining > 0) {
            timeRemaining--;
        } else {
            alert('O tempo do simulado acabou!');
            window.location.href = 'resultado_simulado_enem.html';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    const taskSections = document.querySelectorAll('.task-section');

    taskSections.forEach(function(section) {
        const options = section.querySelectorAll('li');
        let answered = false;

        options.forEach(function(option) {
            option.addEventListener('click', function() {
                if (answered) return; 
                answered = true;

                options.forEach(function(opt) {
                    opt.style.pointerEvents = 'none';
                });

                if (option.dataset.correct === "true") {
                    option.style.backgroundColor = 'green';
                    option.style.color = 'white';
                } else {
                    option.style.backgroundColor = 'red';
                    option.style.color = 'white';
                    const correctOption = section.querySelector('li[data-correct="true"]');
                    if (correctOption) {
                        correctOption.style.backgroundColor = 'green';
                        correctOption.style.color = 'white';
                    }
                }
            });
        });
    });
});

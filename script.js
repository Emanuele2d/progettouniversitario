const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    const target = +number.getAttribute('data-target');
    const duration = 2000; // Durata dell'animazione in millisecondi
    const stepTime = 20; // Tempo tra ogni incremento
    let current = 0;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
        current += increment;
        number.textContent = Math.floor(current);

        if (current >= target) {
            clearInterval(timer);
            number.textContent = target;
        }
    }, stepTime);
});
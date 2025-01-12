const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Rimuove la classe 'active' da tutti i tab
    tabs.forEach(t => t.classList.remove('active'));
    // Aggiunge la classe 'active' al tab cliccato
    tab.classList.add('active');

    const year = tab.dataset.year;

    cards.forEach(card => {
      if (card.dataset.year === year) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Assicurati che la prima scheda sia attiva all'avvio e che le schede corrette siano visualizzate
document.addEventListener('DOMContentLoaded', () => {
  const firstTab = document.querySelector('.tab');
  if (firstTab) {
    firstTab.click();
  }
});

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

// Imposta la prima scheda come attiva all'avvio 
document.addEventListener('DOMContentLoaded', () => {
  const firstTab = document.querySelector('.tab');
  if (firstTab) {
    firstTab.click();
  }
    // Nascondi tutte le card tranne quelle della prima scheda all'avvio per evitare problemi di visualizzazione
    const activeYear = firstTab.dataset.year;
    cards.forEach(card => {
      if (card.dataset.year !== activeYear) {
        card.style.display = 'none';
      }
    });
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

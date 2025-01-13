// Dati per i grafici (assicurati che siano corretti)
const emissioniData = {
  labels: ['2022', '2023'],
  datasets: [{
    label: 'Emissioni CO2 (t)',
    data: [50000, 32500],
    backgroundColor: 'rgba(229, 9, 20, 0.5)',
    borderColor: 'rgba(229, 9, 20, 1)',
    borderWidth: 1
  }]
};

const energiaData = {
  labels: ['Fonti Rinnovabili', 'Altre Fonti'],
  datasets: [{
    label: '% Energia da Fonti Rinnovabili',
    data: [100, 0],
    backgroundColor: [
      'rgba(76, 175, 80, 0.5)',
      'rgba(200, 200, 200, 0.5)'
    ],
    borderColor: [
      'rgba(76, 175, 80, 1)',
      'rgba(200, 200, 200, 1)'
    ],
    borderWidth: 1
  }]
};

const diversitaData = {
  labels: ['Donne', 'Uomini'],
  datasets: [{
    label: '% Dipendenti',
    data: [49, 51],
    backgroundColor: [
      'rgba(229, 9, 20, 0.5)',
      'rgba(54, 162, 235, 0.5)'
    ],
    borderColor: [
      'rgba(229, 9, 20, 1)',
      'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
  }]
};

const formazioneData = {
  labels: ['2022', '2023'],
  datasets: [{
    label: 'Ore di Formazione',
    data: [400000, 450000],
    backgroundColor: 'rgba(229, 9, 20, 0.5)',
    borderColor: 'rgba(229, 9, 20, 1)',
    borderWidth: 1
  }]
};

// Funzione per creare i grafici
function createChart(chartId, type, data, options) {
  const canvas = document.getElementById(chartId);

  // Imposta le dimensioni del canvas esplicitamente
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const chart = new Chart(canvas, {
    type: type,
    data: data,
    options: options
  });

  return chart;
}

// Crea i grafici
const emissioniChart = createChart('emissioniChart', 'bar', emissioniData, {
  animation: {
    duration: 200 // Disabilita l'animazione iniziale
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
});

const energiaChart = createChart('energiaChart', 'pie', energiaData, {
    animation: {
        duration: 200
    }
});

const diversitaChart = createChart('diversitaChart', 'pie', diversitaData, {
    animation: {
        duration: 200
    }
});

const formazioneChart = createChart('formazioneChart', 'bar', formazioneData, {
  animation: {
    duration: 200
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const chartId = entry.target.id;
      let chartToAnimate;

      // Trova il grafico corretto da animare
      switch (chartId) {
        case 'emissioniChart':
          chartToAnimate = emissioniChart;
          break;
        case 'energiaChart':
          chartToAnimate = energiaChart;
          break;
        case 'diversitaChart':
          chartToAnimate = diversitaChart;
          break;
        case 'formazioneChart':
          chartToAnimate = formazioneChart;
          break;
      }

      // Anima il grafico se trovato
      if (chartToAnimate) {
        // Ripristina l'animazione
        chartToAnimate.options.animation.duration = 1000; // Durata in ms
        chartToAnimate.update();
      }

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

// Osserva i canvas
observer.observe(document.getElementById('emissioniChart'));
observer.observe(document.getElementById('energiaChart'));
observer.observe(document.getElementById('diversitaChart'));
observer.observe(document.getElementById('formazioneChart'));

const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});


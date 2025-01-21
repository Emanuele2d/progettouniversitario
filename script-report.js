// Definizione dei dati per i grafici.
// Questa sezione definisce gli oggetti che contengono i dati necessari per creare i diversi grafici. 
// Ogni oggetto include informazioni come le etichette degli assi, i valori dei dati, i colori e lo stile dei grafici.
const emissioniData = {
  labels: ['2022', '2023'],
  datasets: [
    {
      label: 'Scope 1 (t CO2e)',
      data: [7583.19, 4878.42], // Dati Scope 1
      backgroundColor: 'rgba(229, 9, 20, 0.5)',
      borderColor: 'rgba(229, 9, 20, 1)',
      borderWidth: 1,
    },
    {
      label: 'Scope 2 (Location-based) (t CO2e)',
      data: [256.15, 260.70], // Dati Scope 2 Location-based
      backgroundColor: 'rgba(54, 162, 235, 0.5)', // Colore diverso per Scope 2
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Scope 2 (Market-based) (t CO2e)',
      data: [1.64, 1.33], // Dati Scope 2 Market-based
      backgroundColor: 'rgba(255, 206, 86, 0.5)', // Colore diverso per Scope 2
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
  ],
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
  labels: ['2023'],
  datasets: [{
    label: 'Ore di Formazione',
    data: [50000],
    backgroundColor: 'rgba(229, 9, 20, 0.5)',
    borderColor: 'rgba(229, 9, 20, 1)',
    borderWidth: 1
  }]
};

// Funzione per la creazione dei grafici.
// Questa funzione crea un nuovo grafico Chart.js, impostando il tipo di grafico, i dati e le opzioni di visualizzazione, come l'animazione e la scala degli assi. 
function createChart(chartId, type, data) {
  const canvas = document.getElementById(chartId);
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  return new Chart(canvas, {
    type: type,
    data: data,
    options: { 
      animation: { 
        duration: 3000 
      },
      scales: { 
        y: { 
          beginAtZero: type === 'bar' 
        } 
      } 
    }
  });
}

// Creazione dei grafici.
// In questa sezione, la funzione createChart viene chiamata per ogni grafico, passando l'ID del canvas, il tipo di grafico e i dati corrispondenti. 
// Questo genera i grafici e li visualizza nella pagina.
createChart('emissioniChart', 'bar', emissioniData);
createChart('energiaChart', 'pie', energiaData);
createChart('diversitaChart', 'pie', diversitaData);
createChart('formazioneChart', 'bar', formazioneData);

// Gestione del menu hamburger.
// Questo codice gestisce l'interazione con il menu hamburger, come nel file script.js 
// aggiungendo un event listener al pulsante che apre e chiude il menu al click
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

console.log('Main loaded');

const backgroundColours = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const chartExample = document.querySelector('.chart-example');

createChart(chartExample);

function createChart(canvasElement) {
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: ['T1H', 'T1J', 'T1K', 'T1L', 'T1M', 'T1N'],
            datasets: [{
                backgroundColor: backgroundColours,
                label: '# Aantal studenten per klas',
                data: [20, 18, 21, 18, 17, 19],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
//Werk hieronder opdracht 1 en opdracht 2 uit.

const assignment1Url = 'json/assignment1.json';
const assignment2Url = 'json/assignment2.json';

const chartAssignment1 = document.querySelector('.chart-assignment-1');
const chartAssignment2 = document.querySelector('.chart-assignment-2');




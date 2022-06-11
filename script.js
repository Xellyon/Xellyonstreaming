const barCanvas = document.getElementById
("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Inazuma Eleven", "Cobra", "Galactik football", "SpongeBob", ],
        datasets: [{
            data: [],
            backgroundColor: [
                "Orange",
                "Violet",
                "Blue",
                "Green"
            ]
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 500 000,
                ticks: {
                size: 18
            }
            },
            x: {
                ticks: {
                    font: {
                        size: 18
                    }
                }
            }
        }
    }
})
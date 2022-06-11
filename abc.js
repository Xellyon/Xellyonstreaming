const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Inazuma Eleven", "Cobra", "Galactik football", "SpongeBob"],
        datasets: [{
            label: 'Nombre de vues',
            
            data: [600000,150000,750000,300000],
            barPercentage: 0.8,
            backgroundColor: [
                "Orange",
                "Violet",
                "lightblue",
                "green",
                
            ]
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 800000 ,
                ticks: {
                    font: {
                        size: 18,
                        labels: {
                            color: 'orange'
                        }
                    }
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

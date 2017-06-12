/**
 * Created by genm1023 on 6/12/17.
 */


var lineChartData = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'vested balance',
            data: [0],
            backgroundColor: "rgba(153,255,51,0.6)"
        }
        // TODO 増加量の表示
        // , {
        //     label: '',
        //     data: [],
        //     backgroundColor: "rgba(255,153,0,0.6)"
        // }
        ]
    }

};


var ctx = $('#myChart')[0].getContext('2d');
var myChart = new Chart(ctx, lineChartData);

function inputDataToChart(transition, increment){

    var xCoordinate = [];
    for(var i=0;i<transition.length;i++){
        xCoordinate.push(i);
    }

    myChart.data.labels = xCoordinate;
    myChart.data.datasets[0].data = transition;
    myChart.update();

}

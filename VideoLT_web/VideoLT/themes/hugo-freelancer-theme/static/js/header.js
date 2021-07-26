var chartDom = document.getElementById('main1');
var myChart = echarts.init(chartDom);
var option;

var data = [];
var colorset = [];
colorset = ['#ffff99','#ffcc99','#ff9999','#ccff66','#99ff66','#cc99ff','#66ffcc','#66ccff','#99ccff','#cc66ff','#ffccff']
for (let i = 0; i < 11; ++i) {
    item = {
        value: 10,
        itemStyle:{
            color:colorset[i]
        }
        
    }
    data.push(item);
}

option = {
    backgroundColor:'#18bc9c',
    yAxis: {
        max: 'dataMax',
        show:false,
    },
    xAxis: {
        show:false,
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','L'],
        inverse: false,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 10 // only the largest 3 bars will be displayed
    },
    series: [{
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
            show: false,
            position: 'right',
            valueAnimation: true
        }
    }],
    legend: {
        show: false
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};

function run () {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
            data[i].value += Math.round(Math.random() * 2000);
        }
        else {
            data[i].value += Math.round(Math.random() * 200);
        }
    }
    myChart.setOption(option);
}

setTimeout(function() {
    run();
}, 0);
setInterval(function () {
    run();
}, 3000);

option && myChart.setOption(option);

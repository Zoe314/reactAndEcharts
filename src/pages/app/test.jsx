import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

  
class Test extends React.Component {
    componentDidMount() {
        // 初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 根据窗口大小，图表进行变化
        window.onresize = myChart.resize;
        // 绘制图表
        myChart.setOption({
            title: { text: '某地区蒸发量和降水量-柱状图' },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸发量', '降水量']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: {
                        show: true,
                        type: 'jpg'
                    }
                }
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         myTool1: {
            //             show: true,
            //             title: '自定义扩展方法1',
            //             icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            //             onclick: function (){
            //                 alert('myToolHandler1')
            //             }
            //         },
            //         myTool2: {
            //             show: true,
            //             title: '自定义扩展方法',
            //             icon: 'image://http://echarts.baidu.com/images/favicon.png',
            //             onclick: function (){
            //                 alert('myToolHandler2')
            //             }
            //         }
            //     }
            // },
            xAxis: [
                {
                    type: 'category',
                    data: this.props.data.xdata
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: this.props.data.ydata.ydata1,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: this.props.data.ydata.ydata2,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
            ]
        });
    }
   
    render() {
        return (
            <div id="main" style={{ marginTop:' 50px',width: '100%', height: 500 }}></div>
        );
    }
}

export default Test;
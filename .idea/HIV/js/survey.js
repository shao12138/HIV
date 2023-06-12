$(function () {
    ceshis8();
    ceshis6();
    ceshis1();
    ceshis2();
    ceshis3();
    ceshis4();
    ceshis5();
    ceshis7();

    //左上
    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart3'));
        option = {
            "series": [{
                "type": "pie",
                "center": ["50%", "60%"],
                "radius": ["20%", "43%"],
                "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                "startAngle": 135,
                "labelLine": {
                    "normal": {
                        "length": 15
                    }
                },
                "label": {
                    "normal": {
                        "formatter": "{b|{b}:}  {per|{c}} ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 12,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#b3e5ff",
                                "fontSize": 10,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 12,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 10,
                                "padding": [5, 8],
                                "borderRadius": 2
                            }
                        },
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 12
                        }
                    }
                },
                "emphasis": {
                    "label": {
                        "show": true,
                        "formatter": "{b|{b}:}  {per|{d}%}  ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 22,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#fff",
                                "fontSize": 14,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 6],
                                "borderRadius": 2
                            }
                        }
                    }
                },
                "data": [{
                    "name": "江苏",
                    "value": 11181
                }, {
                    "name": "黑龙江",
                    "value": 4289
                }, {
                    "name": "内蒙古",
                    "value": 1900
                }, {
                    "name": "吉林",
                    "value": 3885
                }, {
                    "name": "北京市",
                    "value": 5709
                }, {
                    "name": "辽宁",
                    "value": 7059
                }, {
                    "name": "河北",
                    "value": 5089
                }, {
                    "name": "天津",
                    "value": 1945
                }, {
                    "name": "山西",
                    "value": 3823
                }, {
                    "name": "陕西",
                    "value": 5847
                }, {
                    "name": "甘肃",
                    "value": 2959
                }, {
                    "name": "宁夏",
                    "value": 688
                }, {
                    "name": "青海",
                    "value": 1153
                }, {
                    "name": "新疆",
                    "value": 16476
                }, {
                    "name": "四川",
                    "value": 77447
                }, {
                    "name": "重庆",
                    "value": 22058
                }, {
                    "name": "山东",
                    "value": 5275
                }, {
                    "name": "河南",
                    "value": 24190
                }, {
                    "name": "安徽",
                    "value": 8594
                }, {
                    "name": "湖北",
                    "value": 9844
                }, {
                    "name": "浙江",
                    "value": 12739
                }, {
                    "name": "福建",
                    "value": 6365
                }, {
                    "name": "江西",
                    "value": 9483
                }, {
                    "name": "湖南",
                    "value": 20972
                }, {
                    "name": "贵州",
                    "value": 20871
                }, {
                    "name": "云南",
                    "value": 46317
                }, {
                    "name": "广东",
                    "value": 31046
                }, {
                    "name": "广西",
                    "value": 53533
                }, {
                    "name": "海南",
                    "value": 1344
                }, {
                    "name": "上海",
                    "value": 4291
                },]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.currentIndex = -1;
        //myChart.setOption(option);
        //console.log(option.series[0].data[0]);
        setInterval(function () {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //左中
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart6'));
        var labelimg = "";
        option = {
            /*backgroundColor: "#0E233E",*/
            "grid": {
                "left": "6%",
                "top": "18%",
                "right": "3%",
                "bottom": "15%"
            },
            "legend": {
                "data": [
                    "四川",
                    "广西",
                    "云南",
                    "广东",
                    "河南",
                    "重庆",
                    "湖南"
                ],
                "top": "92%",
                "icon": "circle",
                "textStyle": {
                    "color": "#0DCAD2"
                }
            },
            "color": [
                "#534EE1",
                "#ECD64F",
                "#00E4F0",
                "#44D16D",
                "#124E91",
                "#BDC414",
                "#C8CCA5"
            ],
            "tooltip": {
                "position": "top",
            },
            "xAxis": {
                "type": "category",
                "data": [
                    "四川",
                    "广西",
                    "云南",
                    "广东",
                    "河南",
                    "重庆",
                    "湖南"
                ],
                "axisLabel": {
                    "show": false,
                    "color": "#999999",
                    "fontSize": 16
                },
                "axisTick": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "splitLine": {
                    "show": false
                }
            },
            "yAxis": {
                "type": "value",
                "axisLabel": {
                    "show": false,
                    "color": "#999999",
                    "fontSize": 16
                },
                "axisTick": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "splitLine": {
                    "show": false
                }
            },
            "series": [{
                "name": "四川",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "stack": "a",
                "type": "bar"
            },
                {
                    "name": "广西",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "云南",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "广东",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "河南",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "重庆",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "湖南",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "type": "pictorialBar",
                    "name": "提示框值",
                    "data": [{
                        "name": "",
                        "value": 7.74,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (params) {
                                var index = params.dataIndex;
                                var str = "{a|" + params.value + "万}";
                                return str;
                            },
                            "rich": {
                                "a": {
                                    "fontSize": 18,
                                    "color": "#534EE1",
                                    "align": "center",
                                    "height": 40
                                },
                                "c": {
                                    "fontSize": 18,
                                    "color": "#fff",
                                    "padding": [
                                        -2,
                                        0,
                                        2,
                                        0
                                    ],
                                    "backgroundColor": {
                                        "image": labelimg
                                    },
                                    "align": "center",
                                    "verticalAlign": "bottom",
                                    "height": 50,
                                    "lineHeight": 40,
                                    "width": 100
                                }
                            }
                        },
                        "itemStyle": {
                            "normal": {
                                "color": {
                                    "type": "linear",
                                    "x": 0,
                                    "y": 0,
                                    "x2": 0,
                                    "y2": 1,
                                    "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(83,78,225,1)"
                                    },
                                        {
                                            "offset": 1,
                                            "color": "rgba(83,78,225,0)"
                                        }
                                    ],
                                    "global": false
                                }
                            }
                        }
                    },
                        {
                            "name": "",
                            "value": 5.35,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#ECD64F",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(236,214,79,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(236,214,79,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 4.63,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#00E4F0",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(0,228,240,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(0,228,240,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 3.11,
                            "label": {
                                "show": true,
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "position": "top",
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#44D16D",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(68,209,109,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(68,209,109,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 2.42,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#124E91",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(18,78,145,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(18,78,145,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 2.21,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#BDC414",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(189,196,20,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(189,196,20,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 2.09,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "万}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#C8CCA5",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(200,204,165,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(200,204,165,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        }
                    ],
                    "stack": "a",
                    "symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
                }
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //左下
    function ceshis3() {
        var myChart = echarts.init(document.getElementById('chart1'));

        option = {
            grid: {
                top: "25%",
                left: 15,
                right: 22,
                bottom: "10%", //也可设置left和right设置距离来控制图表的大小
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true,
                    },
                },
            },
            legend: {
                data: ["新发病例数", "新发病率"],
                top: "5%",
                textStyle: {
                    color: "#ffffff",
                },
            },
            xAxis: {
                data: [
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                ],
                axisLine: {
                    show: true, //隐藏X轴轴线
                    lineStyle: {
                        color: "#01FCE3",
                    },
                },
                axisTick: {
                    show: true, //隐藏X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac", //X轴文字颜色
                    },
                },
            },
            yAxis: [
                {
                    type: "value",
                    name: "/万人",
                    nameTextStyle: {
                        color: "#ebf8ac",
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: true,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#FFFFFF",
                        },
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac",
                        },
                    },
                },
                {
                    type: "value",
                    name: "/10万人",
                    nameTextStyle: {
                        color: "#ebf8ac",
                    },
                    position: "right",
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} ", //右侧Y轴文字显示
                        textStyle: {
                            color: "#ebf8ac",
                        },
                    },
                },
                {
                    type: "value",
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 12,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
                        },
                    },
                },
            ],
            series: [
                {
                    name: "新发病率",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    smooth: true, //平滑曲线显示
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#058cff",
                    },
                    lineStyle: {
                        color: "#058cff",
                    },
                    areaStyle: {
                        color: "rgba(5,140,255, 0.2)",
                    },
                    data: [3.111961, 3.122951, 3.33132, 3.694035, 3.965613, 4.144979, 4.619548, 5.09861, 4.353712, 4.32667, 3.733593],
                },
                {
                    name: "新发病例数",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#00FFE3",
                                },
                                {
                                    offset: 1,
                                    color: "#4693EC",
                                },
                            ]),
                        },
                    },
                    data: [4.1929, 4.2286, 4.5145, 5.033, 5.436, 5.7194, 6.417, 7.1204, 6.1393, 6.1032, 5.2709],
                },
            ],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //中间上
    function ceshis4() {
        var myChart = echarts.init(document.getElementById('map'));
        var uploadedDataURL = "./js/data-1528971808162-BkOXf61WX.json";
        var geoGpsMap = {
            '1': [116.4071, 39.9046],
            '2': [125.8154, 44.2584],
            '3': [121.4737, 31.2303],
            '4': [117.1582, 36.8701],
            '5': [103.9526, 30.7617],
            '6': [106.6302, 26.6470],
            '7': [106.6302, 26.6470],
            '8': [106.6302, 26.6470],
        };
        var geoCoordMap = {
            "江苏": [118.8062, 31.9208],
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891],
        };
        //2012
        var d1 = {
            '江苏': 978,
            '黑龙江': 259,
            '内蒙古': 69,
            '吉林': 254,
            '北京市': 556,
            '辽宁': 449,
            '河北': 278,
            '天津': 156,
            '山西': 252,
            '陕西': 340,
            '甘肃': 141,
            '宁夏': 48,
            '青海': 77,
            '新疆': 2450,
            '四川': 4902,
            '重庆': 1618,
            '山东': 289,
            '河南': 3193,
            '安徽': 815,
            '湖北': 853,
            '浙江': 976,
            '福建': 456,
            '江西': 568,
            '湖南': 1925,
            '贵州': 1396,
            '云南': 6312,
            '广东': 3084,
            '广西': 8432,
            '海南': 130,
            '上海': 652,
        };
        //2013
        var d2 = {
            "江苏": 1173,
            '黑龙江': 376,
            '内蒙古': 135,
            "吉林": 345,
            '北京市': 610,
            "辽宁": 576,
            "河北": 414,
            "天津": 194,
            "山西": 312,
            "陕西": 498,
            "甘肃": 174,
            "宁夏": 59,
            "青海": 93,
            "新疆": 1791,
            "四川": 5972,
            "重庆": 1815,
            "山东": 350,
            "河南": 2852,
            "安徽": 841,
            "湖北": 1021,
            "浙江": 1250,
            "福建": 412,
            "江西": 755,
            "湖南": 2096,
            "贵州": 1545,
            "云南": 5812,
            "广东": 3066,
            "广西": 7040,
            '海南': 151,
            '上海': 549,

        };
        //2014
        var d3 = {
            "江苏": 1312,
            '黑龙江': 485,
            '内蒙古': 202,
            "吉林": 437,
            '北京市': 704,
            "辽宁": 654,
            "河北": 515,
            "天津": 233,
            "山西": 430,
            "陕西": 531,
            "甘肃": 228,
            "宁夏": 57,
            "青海": 107,
            "新疆": 1612,
            "四川": 6503,
            "重庆": 2491,
            "山东": 453,
            "河南": 2868,
            "安徽": 861,
            "湖北": 1098,
            "浙江": 1505,
            "福建": 622,
            "江西": 782,
            "湖南": 2279,
            "贵州": 1705,
            "云南": 5784,
            "广东": 3498,
            "广西": 6615,
            '海南': 105,
            '上海': 454,
        };
        //2015
        var d4 = {
            "江苏": 1576,
            '黑龙江': 552,
            '内蒙古': 207,
            "吉林": 540,
            '北京市': 777,
            "辽宁": 825,
            "河北": 681,
            "天津": 272,
            "山西": 493,
            "陕西": 655,
            "甘肃": 310,
            "宁夏": 78,
            "青海": 151,
            "新疆": 1868,
            "四川": 7771,
            "重庆": 2621,
            "山东": 608,
            "河南": 3077,
            "安徽": 1040,
            "湖北": 1173,
            "浙江": 1663,
            "福建": 760,
            "江西": 1179,
            "湖南": 2575,
            "贵州": 2112,
            "云南": 5802,
            "广东": 3919,
            "广西": 6300,
            '海南': 190,
            '上海': 522,
        };
        //2016
        var d5 = {
            "江苏": 1612,
            '黑龙江': 566,
            '内蒙古': 287,
            "吉林": 549,
            '北京市': 786,
            "辽宁": 1013,
            "河北": 584,
            "天津": 277,
            "山西": 531,
            "陕西": 809,
            "甘肃": 402,
            "宁夏": 84,
            "青海": 175,
            "新疆": 1921,
            "四川": 9153,
            "重庆": 3077,
            "山东": 730,
            "河南": 3007,
            "安徽": 1334,
            "湖北": 1277,
            "浙江": 1866,
            "福建": 933,
            "江西": 1373,
            "湖南": 2809,
            "贵州": 2619,
            "云南": 5707,
            "广东": 4118,
            "广西": 5986,
            '海南': 175,
            '上海': 549,
        };
        //2017
        var d6 = {
            "江苏": 1317,
            '黑龙江': 617,
            '内蒙古': 311,
            "吉林": 554,
            '北京市': 746,
            "辽宁": 1100,
            "河北": 752,
            "天津": 281,
            "山西": 638,
            "陕西": 888,
            "甘肃": 481,
            "宁夏": 101,
            "青海": 195,
            "新疆": 2003,
            "四川": 10777,
            "重庆": 2966,
            "山东": 848,
            "河南": 2997,
            "安徽": 1149,
            "湖北": 1399,
            "浙江": 1812,
            "福建": 968,
            "江西": 1435,
            "湖南": 3013,
            "贵州": 3045,
            "云南": 5673,
            "广东": 4308,
            "广西": 6108,
            '海南': 169,
            '上海': 515,
        };
        //2018
        var d7 = {
            "江苏": 1550,
            '黑龙江': 696,
            '内蒙古': 343,
            "吉林": 590,
            '北京市': 848,
            "辽宁": 1263,
            "河北": 875,
            "天津": 286,
            "山西": 552,
            "陕西": 1021,
            "甘肃": 618,
            "宁夏": 115,
            "青海": 155,
            "新疆": 2469,
            "四川": 14500,
            "重庆": 3568,
            "山东": 956,
            "河南": 2898,
            "安徽": 1290,
            "湖北": 1477,
            "浙江": 1775,
            "福建": 1049,
            "江西": 1641,
            "湖南": 3099,
            "贵州": 3696,
            "云南": 5531,
            "广东": 4499,
            "广西": 6020,
            '海南': 224,
            '上海': 514,
        };
        //2019
        var d8 = {
            '江苏': 1663,
            '黑龙江': 738,
            '内蒙古': 346,
            '吉林': 616,
            '北京市': 682,
            '辽宁': 1179,
            '河北': 990,
            '天津': 246,
            '山西': 615,
            '陕西': 1105,
            '甘肃': 605,
            '宁夏': 146,
            '青海': 200,
            '新疆': 2362,
            '四川': 17869,
            '重庆': 3902,
            '山东': 1041,
            '河南': 3298,
            '安徽': 1264,
            '湖北': 1546,
            '浙江': 1892,
            '福建': 1165,
            '江西': 1750,
            '湖南': 3179,
            '贵州': 4753,
            '云南': 5696,
            '广东': 4554,
            '广西': 7032,
            '海南': 203,
            '上海': 536,
        };
        var d9 = {
            '江苏': 11181,
            '黑龙江': 4289,
            '内蒙古': 1900,
            '吉林': 3885,
            '北京市': 5709,
            '辽宁': 7059,
            '河北': 5089,
            '天津': 1945,
            '山西': 3823,
            '陕西': 5847,
            '甘肃': 2959,
            '宁夏': 688,
            '青海': 1153,
            '新疆': 16476,
            '四川': 77447,
            '重庆': 22058,
            '山东': 5275,
            '河南': 24190,
            '安徽': 8594,
            '湖北': 9844,
            '浙江': 12739,
            '福建': 6365,
            '江西': 9483,
            '湖南': 20972,
            '贵州': 20871,
            '云南': 46317,
            '广东': 31046,
            '广西': 53533,
            '海南': 1344,
            '上海': 4291,
        };
        var colors = [
            ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF", "#F46E36", "#F46E36", "#37A2DA"],
            ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
            ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
            ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
        ];
        var colorIndex = 0;
        $(function () {
            var year = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "总和"];
            var mapData = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ];

            /*柱子Y名称*/
            var categoryData = [];
            var barData = [];

            for (var key in geoCoordMap) {
                mapData[0].push({
                    "year": '2012',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d1[key],
                });
                mapData[1].push({
                    "year": '2013',
                    "name": key,
                    "value": d2[key] / 100,
                    "value1": d2[key],
                });
                mapData[2].push({
                    "year": '2014',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d3[key],
                });
                mapData[3].push({
                    "year": '2015',
                    "name": key,
                    "value": d4[key] / 100,
                    "value1": d4[key],
                });
                mapData[4].push({
                    "year": '2016',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d5[key],
                });
                mapData[5].push({
                    "year": '2017',
                    "name": key,
                    "value": d6[key] / 100,
                    "value1": d6[key],
                });
                mapData[6].push({
                    "year": '2018',
                    "name": key,
                    "value": d7[key] / 100,
                    "value1": d7[key],
                });
                mapData[7].push({
                    "year": '2019',
                    "name": key,
                    "value": d8[key] / 100,
                    "value1": d8[key],
                });
                mapData[8].push({
                    "year": '总和',
                    "name": key,
                    "value": d9[key] / 100,
                    "value1": d9[key],
                });
            }

            for (var i = 0; i < mapData.length; i++) {
                mapData[i].sort(function sortNumber(a, b) {
                    return a.value - b.value
                });
                barData.push([]);
                categoryData.push([]);
                for (var j = 0; j < mapData[i].length; j++) {
                    barData[i].push(mapData[i][j].value1);
                    categoryData[i].push(mapData[i][j].name);
                }
            }
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var convertToLineData = function (data, gps) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var toCoord = geoCoordMap[dataItem.name];
                    //debugger;
                    var fromCoord = gps; //郑州
                    //  var toCoord = geoGps[Math.random()*3];
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }
                }
                return res;
            };
            //时间轴
            optionXyMap01 = {
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    width: '90%',
                    //  height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 1
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },

                },
                //柱状图
                baseOption: {
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    grid: {
                        right: '5%',
                        top: '15%',
                        bottom: '10%',
                        width: '20%'
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        zoom: 1,
                        center: [113.83531246, 34.0267395887],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                // shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },
                },
                options: []

            };

            for (var n = 0; n < year.length; n++) {

                optionXyMap01.options.push({
                    /*backgroundColor: '#013954',*/
                    title:
                        [{
                            text: '2012-2019各省全年艾滋病发病数',
                            subtext: '   ',
                            left: '30%',
                            top: '0%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 20
                            }
                        },
                            {
                                id: 'statistic',
                                text: year[n] + "年数据统计",
                                left: '80%',
                                top: '5%',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 15
                                }
                            }
                        ],
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 5,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 0,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        //城市名
                        axisLabel: {
                            interval: 0.0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: categoryData[n]
                    },

                    series: [
                        //未知作用
                        {
                            //文字和标志
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n]),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            }
                        },
                        //地图
                        {
                            type: 'map',
                            map: 'china',
                            geoIndex: 0,
                            aspectScale: 1, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: mapData
                        },
                        //地图点的动画效果
                        {
                            //  name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n].sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 20)),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    shadowBlur: 10,
                                    shadowColor: colors[colorIndex][n]
                                }
                            },
                            zlevel: 1
                        },
                        //柱状图
                        {
                            zlevel: 5,
                            type: 'bar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            },
                            data: barData[n]
                        }
                    ]
                })
            }
            myChart.setOption(optionXyMap01);
            /*});*/
        });

        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //中间下-折线图
    function ceshis5() {
        var myChart = echarts.init(document.getElementById('chart4'));

        var option = {
            tooltip: {trigger: 'axis', axisPointer: {lineStyle: {color: '#fff'}}},
            legend: {
                icon: 'rect',
                itemWidth: 14, itemHeight: 5, itemGap: 10,
                data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
                right: '10px', top: '0px',
                textStyle: {fontSize: 12, color: '#fff'}
            },
            grid: {x: 40, y: 50, x2: 45, y2: 40},
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {lineStyle: {color: '#57617B'}},
                axisLabel: {textStyle: {color: '#fff'}},
                data: [
                    "腊月初7",
                    "腊月初8",
                    "腊月初9",
                    "腊月初10",
                    "腊月初11",
                    "腊月初12",
                    "腊月初13",
                    "腊月初14",
                    "腊月初15",
                    "腊月初16",
                    "腊月初17",
                    "腊月初18",
                    "腊月初19",
                    "腊月初20",
                    "腊月初21",
                    "腊月初22",
                    "腊月初23",
                    "腊月初24",
                    "腊月初25",
                    "腊月初26",
                    "腊月初27",
                    "腊月初28",
                    "腊月初29",
                    "腊月初30",
                    "正月初1",
                    "正月初2",
                    "正月初3",
                    "正月初4",
                    "正月初5",
                    "正月初6",
                    "正月初7",
                    "正月初8",
                    "正月初9",
                    "正月初10",
                    "正月初11",
                    "正月初12",
                    "正月初13",
                    "正月初14",
                    "正月初15",
                    "正月初16",
                    "正月初17",
                    "正月初18",
                    "正月初19",
                    "正月初20",
                    "正月初21",
                    "正月初22",
                    "正月初23",
                    "正月初24",
                    "正月初25",
                    "正月初26",
                    "正月初27",
                    "正月初28",
                    "正月初29",
                    "正月初30",
                    "二月初1",
                    "二月初2",
                    "二月初3",
                ]
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {lineStyle: {color: '#57617B'}},
                axisLabel: {margin: 10, textStyle: {fontSize: 12}, textStyle: {color: '#fff'}, formatter: '{value}'},
                splitLine: {lineStyle: {color: '#57617B'}}
            }, {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {lineStyle: {color: '#57617B'}},
                axisLabel: {margin: 10, textStyle: {fontSize: 12}, textStyle: {color: '#fff'}, formatter: '{value}'},
                splitLine: {show: false, lineStyle: {color: '#57617B'}}
            }],
            series: [{
                name: '2019年', type: 'line', smooth: true, lineStyle: {normal: {width: 2}},
                yAxisIndex: 0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(185,150,248,0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(185,150,248,0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#B996F8'}},
                data: [
                    "353.7092772",
                    "312.9795936",
                    "333.7403148",
                    "304.6864896",
                    "311.8322448",
                    "323.6503716",
                    "338.8797",
                    "372.6619488",
                    "345.076848",
                    "366.9401088",
                    "367.8382044",
                    "389.247606",
                    "405.4737204",
                    "436.0823892",
                    "502.639344",
                    "495.849114",
                    "513.5867532",
                    "490.7215872",
                    "490.6611612",
                    "493.986762",
                    "530.0219448",
                    "527.0810292",
                    "488.5993548",
                    "414.3138012",
                    "342.6116616",
                    "545.0786136",
                    "591.068988",
                    "606.2593068",
                    "637.1947296",
                    "726.2124984",
                    "687.9075336",
                    "597.5534592",
                    "563.8972788",
                    "505.580616",
                    "469.952766",
                    "487.8620604",
                    "445.0947084",
                    "415.8890568",
                    "345.338802",
                    "395.8886016",
                    "431.404866",
                    "412.1937396",
                    "463.749948",
                    "478.0189404",
                    "368.9358516",
                    "327.3258924",
                    "364.208724",
                    "417.344238",
                    "355.913676",
                    "394.2562572",
                    "353.2459572",
                    "362.2391928",
                    "315.1831824",
                    "299.6386668",
                    "300.7750968",
                    "338.5533672",
                    "376.5856536",
                ],
            }, {
                name: '2020年', type: 'line', smooth: true, lineStyle: {normal: {width: 2}},
                yAxisIndex: 0,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(3, 194, 236, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(3, 194, 236, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#03C2EC'}},
                data: [
                    "266.8720608",
                    "251.204328",
                    "397.885122",
                    "448.8799356",
                    "420.7530096",
                    "398.7199404",
                    "401.682078",
                    "447.0274008",
                    "497.460042",
                    "438.973668",
                    "481.0020084",
                    "446.3765172",
                    "436.1630004",
                    "412.6136436",
                    "431.4138732",
                    "450.4974408",
                    "479.9456712",
                    "529.5260304",
                    "525.4227648",
                    "542.3144724",
                    "621.2109996",
                    "580.6973268",
                    "551.6447328",
                    "448.30989",
                    "261.5466672",
                    "287.4244176",
                    "264.7354104",
                    "225.8917632",
                    "192.6017028",
                    "183.7748412",
                    "153.6096312",
                    "130.643928",
                    "142.4592036",
                    "117.190152",
                    "85.9585284",
                    "81.3802464",
                    "81.188244",
                    "85.798116",
                    "94.7500092",
                    "111.1956336",
                    "100.9839312",
                    "74.7511092",
                    "71.3811852",
                    "73.1563812",
                    "73.4141556",
                    "70.6802436",
                    "73.5190992",
                    "92.2017168",
                    "96.6906396",
                    "105.1612632",
                    "114.5071728",
                    "125.7085332",
                    "144.2585376",
                    "",
                    "153.7678404",
                    "174.826512",
                    "176.0520096"
                ]
            }, {
                name: '2021年', type: 'line', smooth: true, lineStyle: {normal: {width: 2}},
                yAxisIndex: 1,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(218, 57, 20, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(218, 57, 20, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#DA3914'}},
                data: [
                    "232.7756616",
                    "230.016024",
                    "233.3630412",
                    "235.0945944",
                    "259.4474064",
                    "235.2896424",
                    "258.7597812",
                    "248.1890868",
                    "279.7580592",
                    "242.2203264",
                    "203.4094356",
                    "220.6766268",
                    "179.8170516",
                    "247.2565176",
                    "215.67303",
                    "214.9407252",
                    "223.078698",
                    "240.5989008",
                    "271.1700504",
                    "273.4571988",
                    "276.777648",
                    "288.8695224",
                    "296.2966716",
                    "274.2100128",
                    "179.6676876",
                    "279.8210448",
                    "315.7894836",
                    "339.988428",
                    "367.2019656",
                    "457.6756608",
                    "465.4042596",
                    "384.7634784",
                    "373.4234784",
                    "374.8335264",
                    "359.8661844",
                    "310.8223692",
                    "299.2568652",
                    "279.2156832",
                    "283.5914652",
                    "390.2956488",
                    "402.7797576",
                    "382.4102988",
                    "331.7005404",
                    "311.0705208",
                    "295.2989136",
                    "297.9522468",
                    "344.6025444",
                    "300.4493148",
                    "315.3359484",
                    "268.2088848",
                    "260.6437764",
                    "256.2952104",
                    "278.5133484",
                    "",
                    "341.3272608",
                    "293.3725392",
                    "317.3186016"
                ]
            }, {
                name: '2022年', type: 'line', smooth: true, lineStyle: {normal: {width: 2}},
                yAxisIndex: 1,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(232, 190, 49, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(232, 190, 49, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#74e831'}},
                data: [
                    "288.4946868",
                    "315.5264604",
                    "320.1609564",
                    "303.8472972",
                    "306.68706",
                    "321.0785892",
                    "349.5358656",
                    "329.8587948",
                    "345.1873644",
                    "319.277052",
                    "329.2004592",
                    "364.9374648",
                    "368.6229648",
                    "438.4250064",
                    "405.3887028",
                    "430.2300096",
                    "445.4941032",
                    "472.9266972",
                    "495.6819624",
                    "509.0758632",
                    "510.9170256",
                    "486.946242",
                    "400.3082856",
                    "",
                    "262.5697296",
                    "449.9671176",
                    "472.8888216",
                    "530.2239264",
                    "598.2642504",
                    "737.330364",
                    "619.3395108",
                    "535.9462524",
                    "514.3986972",
                    "501.72696",
                    "464.2909956",
                    "454.6982628",
                    "416.8941048",
                    "417.6339588",
                    "347.2614828",
                    "457.4314296",
                    "439.1502804",
                    "413.5502304",
                    "471.435066",
                    "435.5155836",
                    "407.7096444",
                    "334.2262824",
                    "322.0361064",
                    "334.720026",
                    "361.4929884",
                    "417.0002472",
                    "380.8938816",
                    "334.1932344",
                    "354.7780236",
                    "292.5887832",
                    "332.1069012",
                    "347.2443432",
                    "363.285324"
                ]
            }, {
                name: '2023年', type: 'line', smooth: true, lineStyle: {normal: {width: 2}},
                yAxisIndex: 1,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(232, 190, 49, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(232, 190, 49, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {normal: {color: '#E8BE31'}},
                data: [
                    "279.230976",
                    "320.256018",
                    "409.8414672",
                    "379.6030656",
                    "397.9485612",
                    "397.926594",
                    "354.945402",
                    "357.3589104",
                    "393.3393048",
                    "446.0350212",
                    "435.720222",
                    "454.2108048",
                    "456.6596616",
                    "488.9288952",
                    "492.2297424",
                    "506.1688056",
                    "547.8485868",
                    "536.9600808",
                    "572.9425164",
                    "577.4857416",
                    "594.39177",
                    "627.7893984",
                    "584.8987968",
                    "472.3666308",
                    "389.9865528",
                    "682.2626112",
                    "708.2625096",
                    "771.317964",
                    "861.6598884",
                    "989.0398728",
                    "809.7719688",
                    "721.4110128",
                    "684.2855376",
                    "647.5554396",
                    "596.1321684",
                    "539.3303676",
                    "533.4411816",
                    "543.107592",
                    "472.1476068",
                    "614.1711276",
                    "550.714302",
                    "487.127358",
                    "466.528248",
                    "492.3687384",
                    "575.9100972",
                    "495.7288128",
                    "479.9020932",
                    "429.713424",
                    "426.312882",
                    "434.2881096",
                    "480.1981644",
                    "578.8714248",
                    "515.2768668",
                    "",
                    "485.7844428",
                    "404.854038",
                    "404.9594028"
                ]
            }]


        };
        /*var myChart = echarts.init(document.getElementById('channel_handle_detail'));
        myChart.clear();
        if(data.handleTimeData.length>0){
            myChart.setOption(option);
        }else{
            noDataTip($("#channel_handle_detail"));
        }*/
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //右上
    function ceshis6() {
        var myChart = echarts.init(document.getElementById('chart2'));
        var all = {
            "options": [{
                "series": [{
                    "center": [100, 38],
                    "data": [{
                        "name": "青海",
                        "value": 88.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#730000"
                            },
                            "normal": {
                                "areaColor": "#730000"
                            }
                        }
                    }, {
                        "name": "西藏",
                        "value": 244.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#260707"
                            },
                            "normal": {
                                "areaColor": "#260707"
                            }
                        }
                    }, {
                        "name": "新疆",
                        "value": 92.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#5b0000"
                            },
                            "normal": {
                                "areaColor": "#5b0000"
                            }
                        }
                    }, {
                        "name": "重庆",
                        "value": 63.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#b20101"
                            },
                            "normal": {
                                "areaColor": "#b20101"
                            }
                        }
                    }, {
                        "name": "宁夏",
                        "value": 44.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "云南",
                        "value": 64,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#b20101"
                            },
                            "normal": {
                                "areaColor": "#b20101"
                            }
                        }
                    }, {
                        "name": "甘肃",
                        "value": 64.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#b20101"
                            },
                            "normal": {
                                "areaColor": "#b20101"
                            }
                        }
                    }, {
                        "name": "贵州",
                        "value": 79.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#9e0101"
                            },
                            "normal": {
                                "areaColor": "#9e0101"
                            }
                        }
                    }, {
                        "name": "辽宁",
                        "value": 19.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "广西",
                        "value": 29.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "四川",
                        "value": 57.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#db0000"
                            },
                            "normal": {
                                "areaColor": "#db0000"
                            }
                        }
                    }, {
                        "name": "吉林",
                        "value": 30.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "黑龙江",
                        "value": 27,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "上海",
                        "value": 9.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "江西",
                        "value": 31.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "广东",
                        "value": 17.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "内蒙古",
                        "value": 38.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "陕西",
                        "value": 32.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "天津",
                        "value": 6.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "湖南",
                        "value": 34.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "福建",
                        "value": 24.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "浙江",
                        "value": 10.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "北京",
                        "value": 7.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "海南",
                        "value": 41.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "河南",
                        "value": 41.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "湖北",
                        "value": 27.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "安徽",
                        "value": 26.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "江苏",
                        "value": 11.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "山西",
                        "value": 39.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "山东",
                        "value": 15.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河北",
                        "value": 23.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }],
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "china",
                    "roam": false,
                    "type": "map"
                }],
                "title": {
                    "text": "2006"
                }
            }, {
                "series": [{
                    "center": [100, 38],
                    "data": [{
                        "name": "青海",
                        "value": 50.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "新疆",
                        "value": 62.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#b20101"
                            },
                            "normal": {
                                "areaColor": "#b20101"
                            }
                        }
                    }, {
                        "name": "西藏",
                        "value": 234.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#260707"
                            },
                            "normal": {
                                "areaColor": "#260707"
                            }
                        }
                    }, {
                        "name": "重庆",
                        "value": 35.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "宁夏",
                        "value": 25.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "贵州",
                        "value": 56.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#db0000"
                            },
                            "normal": {
                                "areaColor": "#db0000"
                            }
                        }
                    }, {
                        "name": "云南",
                        "value": 47.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "广西",
                        "value": 21.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "甘肃",
                        "value": 41.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "辽宁",
                        "value": 15.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "黑龙江",
                        "value": 21.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "上海",
                        "value": 7.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "四川",
                        "value": 39.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "吉林",
                        "value": 27.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "湖南",
                        "value": 30.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "江西",
                        "value": 16.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "内蒙古",
                        "value": 30.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "福建",
                        "value": 16.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "广东",
                        "value": 16.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "陕西",
                        "value": 25.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "浙江",
                        "value": 6.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "天津",
                        "value": 7.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "北京",
                        "value": 18.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "安徽",
                        "value": 20.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河南",
                        "value": 21.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "湖北",
                        "value": 17.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "海南",
                        "value": 21.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "江苏",
                        "value": 9.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "山西",
                        "value": 28.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "山东",
                        "value": 12.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河北",
                        "value": 11.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }],
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "china",
                    "roam": false,
                    "type": "map"
                }],
                "title": {
                    "text": "2008"
                }
            }, {
                "series": [{
                    "center": [100, 38],
                    "data": [{
                        "name": "青海",
                        "value": 45.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "西藏",
                        "value": 174.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#260707"
                            },
                            "normal": {
                                "areaColor": "#260707"
                            }
                        }
                    }, {
                        "name": "宁夏",
                        "value": 29.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "新疆",
                        "value": 43.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff1111"
                            },
                            "normal": {
                                "areaColor": "#ff1111"
                            }
                        }
                    }, {
                        "name": "贵州",
                        "value": 35.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "云南",
                        "value": 37.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "重庆",
                        "value": 23.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "甘肃",
                        "value": 33.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "四川",
                        "value": 22.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "广西",
                        "value": 20.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "辽宁",
                        "value": 12.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "黑龙江",
                        "value": 21.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "吉林",
                        "value": 28.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "上海",
                        "value": 6.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "湖南",
                        "value": 26.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "江西",
                        "value": 11.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "内蒙古",
                        "value": 35.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "陕西",
                        "value": 17.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "福建",
                        "value": 12.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "天津",
                        "value": 9.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "浙江",
                        "value": 7.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "广东",
                        "value": 10.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "北京",
                        "value": 13.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "安徽",
                        "value": 21.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "海南",
                        "value": 22.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "湖北",
                        "value": 15.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河南",
                        "value": 15.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "江苏",
                        "value": 3.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "山西",
                        "value": 14.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "山东",
                        "value": 11.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河北",
                        "value": 18.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }],
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "china",
                    "roam": false,
                    "type": "map"
                }],
                "title": {
                    "text": "2010"
                }
            }, {
                "series": [{
                    "center": [100, 38],
                    "data": [{
                        "name": "青海",
                        "value": 36.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "西藏",
                        "value": 176.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#260707"
                            },
                            "normal": {
                                "areaColor": "#260707"
                            }
                        }
                    }, {
                        "name": "宁夏",
                        "value": 27.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "重庆",
                        "value": 15.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "贵州",
                        "value": 26.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "云南",
                        "value": 28.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "甘肃",
                        "value": 24.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "辽宁",
                        "value": 7.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "四川",
                        "value": 18.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "黑龙江",
                        "value": 17.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "广西",
                        "value": 17.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "吉林",
                        "value": 16.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "江西",
                        "value": 11.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "新疆",
                        "value": 34.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "上海",
                        "value": 2.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "内蒙古",
                        "value": 20.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "陕西",
                        "value": 10.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "福建",
                        "value": 11.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "天津",
                        "value": 9.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "湖南",
                        "value": 19.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "浙江",
                        "value": 4.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "广东",
                        "value": 9.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "北京",
                        "value": 6.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "海南",
                        "value": 25.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "湖北",
                        "value": 10.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "安徽",
                        "value": 11.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河南",
                        "value": 9.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "山西",
                        "value": 11.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "江苏",
                        "value": 1.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "山东",
                        "value": 10.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "河北",
                        "value": 10.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }],
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "china",
                    "roam": false,
                    "type": "map"
                }],
                "title": {
                    "text": "2012"
                }
            }, {
                "series": [{
                    "center": [100, 38],
                    "data": [{
                        "name": "西藏",
                        "value": 108.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#410000"
                            },
                            "normal": {
                                "areaColor": "#410000"
                            }
                        }
                    }, {
                        "name": "青海",
                        "value": 33.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "宁夏",
                        "value": 14.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "重庆",
                        "value": 18.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "贵州",
                        "value": 26.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "云南",
                        "value": 22.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "甘肃",
                        "value": 19.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "四川",
                        "value": 18.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "江西",
                        "value": 9.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "上海",
                        "value": 5.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "黑龙江",
                        "value": 14.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "辽宁",
                        "value": 10.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "内蒙古",
                        "value": 19.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "福建",
                        "value": 10.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "吉林",
                        "value": 25.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff6b6b"
                            },
                            "normal": {
                                "areaColor": "#ff6b6b"
                            }
                        }
                    }, {
                        "name": "湖南",
                        "value": 14.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "天津",
                        "value": 9.3,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "陕西",
                        "value": 11.6,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "新疆",
                        "value": 39.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff3636"
                            },
                            "normal": {
                                "areaColor": "#ff3636"
                            }
                        }
                    }, {
                        "name": "广西",
                        "value": 14.1,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "北京",
                        "value": 7.7,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "浙江",
                        "value": 5.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "海南",
                        "value": 15,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "广东",
                        "value": 8.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "湖北",
                        "value": 9.0,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "安徽",
                        "value": 11.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "河南",
                        "value": 11.2,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "山西",
                        "value": 14.4,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ff8e8e"
                            },
                            "normal": {
                                "areaColor": "#ff8e8e"
                            }
                        }
                    }, {
                        "name": "江苏",
                        "value": 1.9,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "河北",
                        "value": 8.8,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }, {
                        "name": "山东",
                        "value": 9.5,
                        "itemStyle": {
                            "emphasis": {
                                "areaColor": "#ffd9d9"
                            },
                            "normal": {
                                "areaColor": "#ffd9d9"
                            }
                        }
                    }],
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "china",
                    "roam": false,
                    "type": "map"
                }],
            }],
            "years": ["2006", "2008", "2010", "2012", "2014"]
        };

        option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    orient: 'vertical',
                    autoPlay: true,
                    inverse: true,
                    playInterval: 5000,
                    left: 20,
                    right: null,
                    top: 20,
                    bottom: 20,
                    width: 65,
                    height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 1
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },
                    data: all.years
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c}'
                },
                series: [],
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'quinticInOut'
            },
            options: all.options
        };
        myChart.setOption(option);
    }

    //右下
    function ceshis7() {
        var myChart = echarts.init(document.getElementById('chart5'));
        var xData = (function () {
            var data = [];
            for (var i = 1; i < 13; i++) {
                data.push(i + "月份");
            }
            return data;
        })();
        option = {
            backgroundColor: "#152439",
            tooltip: {
                axisPointer: {
                    type: "shadow",
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
            grid: {
                borderWidth: 0,
                top: 25,
                bottom: 17,
                left: 120,
                textStyle: {
                    color: "#fff",
                },
            },
            legend: {
                icon: "circle",
                right: "4%",
                top: "0%",
                textStyle: {
                    color: "#90979c",
                },
                data: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    trigger: "axis",
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitArea: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                    },
                    data: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
                },
            ],
            yAxis: [
                {
                    type: "category",
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                    },
                    splitArea: {
                        show: false,
                    },
                    data: ["01_AE", "07_BC", "B", "BC", "55_01B", "08_BC", "C", "01B"],
                },
            ],
            series: [
                {
                    name: "2012",
                    type: "bar",
                    stack: "总量",
                    barMaxWidth: 15,
                    barGap: "10%",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(245,221,111,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(245,221,111,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(245,221,111,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(245,221,111,0)",
                                },
                            ]),
                        },
                    },
                    data: [59, 65, 82, 246, 482, 623, 1103, 2158],
                },
                {
                    name: "2013",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(24,191,207,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(24,191,207,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(24,191,207,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(24,191,207,0)",
                                },
                            ]),
                        },
                    },
                    data: [105, 157, 109, 224, 493, 418, 1064, 3350],
                },
                {
                    name: "2014",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(98,113,228,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(98,113,228,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [67, 243, 331, 261, 253, 348, 1638, 1713],
                }, {
                    name: "2015",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(0,119,181)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(0,119,181)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [168, 384, 723, 276, 836, 456, 1301, 2648],
                }, {
                    name: "2016",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(76,175,80)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(76,175,80)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [52, 69, 161, 168, 102, 136, 729, 1110],
                }, {
                    name: "2017",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(103,58,183)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(103,58,183)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [110, 20, 186, 256, 332, 240, 882, 1664],
                }, {
                    name: "2018",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(244,67,54)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(244,67,54)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [110, 145, 301, 284, 228, 400, 1488, 1889],
                }, {
                    name: "2019",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(248,90,4)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(248,90,4)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [93, 347, 206, 167, 154, 424, 907, 1308],
                }, {
                    name: "2020",
                    type: "bar",
                    stack: "总量",
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(250,250,252)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgb(247,248,250)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(40,54,117,0)",
                                },
                            ]),
                            barBorderRadius: 0,
                        },
                    },
                    data: [58, 436, 89, 10, 117, 478, 314, 748],
                },
            ],
        };
        myChart.setOption(option);
    }

    function ceshis8() {
        // var myChart = echarts.init(document.getElementById('chart7'));
        // myChart.setOption(optionXyMap01);
    }
});
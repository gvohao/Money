import React, {useState, useEffect} from 'react';
import {CanvasJSChart} from "canvasjs-react-charts";
import {useParams} from 'react-router-dom'
import { getData } from './lib/func'
import {Card} from "react-bootstrap";

const Chart = () => {
    const [stockData, setStockData] = useState([]);
    let { id } = useParams()

    useEffect(() => {
        getData(id).then(data => {
            console.log(data)
            setStockData(data)
        })
    }, [id]);

    return (
        <>

        <div >
            <Card className='mt-5 ml-5' style={{ width: '96%' }}>
                <Card.Title className='px-3 mt-2'>{ id.toUpperCase() } </Card.Title>
                <CanvasJSChart style ={{height: 1000}}
                    options = { {
                        axisY:{
                            minimum: Math.min(...stockData.map(data => data.low)) /1.1, //max empty space below lowest data point
                            maximum: Math.max(...stockData.map(data => data.high)) *1.1, //max empty space above highest data point
                            crosshair: {
                                enabled: true,
                                snapToDataPoint: true
                            }
                        },
                        axisX: {
                            crosshair: {
                                enabled: true,
                                snapToDataPoint: true
                            },
                            scaleBreaks: {
                                spacing: 0,
                                fillOpacity: 0,
                                lineThickness: 0,
                                customBreaks: stockData.reduce((breaks, value, index, array) => {
                                    if(index === 0) return breaks;

                                    const currentDataPointUnix = Number(new Date(value.date));
                                    const previousDataPointUnix = Number(new Date(array[index - 1].date));

                                    const oneDayInMs = 86400000; //milliseconds in a day

                                    const difference = previousDataPointUnix - currentDataPointUnix; //time diff between previous data point and current data point

                                    return difference === oneDayInMs
                                        ? breaks //if time diff is one day, dont do anything
                                        : [ //else use scale break
                                            ...breaks,
                                            {
                                                startValue: currentDataPointUnix,
                                                endValue: previousDataPointUnix - oneDayInMs
                                            }
                                        ]
                                }, [])
                            }
                        },
                        data: [
                            {
                                type: 'candlestick',
                                dataPoints: stockData.map(stockData => ({
                                    x: new Date (stockData.date),
                                    y: [
                                        stockData.open,
                                        stockData.high,
                                        stockData.low,
                                        stockData.close
                                    ]
                                }))
                            }
                        ]
                    } }
                />
            </Card>
        </div>
        </>

    );
};


export default Chart;

import React, {useEffect, useState} from 'react';
import {Card, CardDeck,Col, Button, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CanvasJSChart} from "canvasjs-react-charts";
import {getData} from "../lib/func";

function Spy({ spy }) {

    const [stockData, setStockData] = useState([]);
    useEffect(() => {
        getData(spy[0].ticker) //why when i put 'spy' it works but when homeIndex it doesnt?
            .then(data => {
                console.log(data)
                setStockData(data)
            })
    }, [spy]);
    console.log(spy[0].ticker)


    return (

        <CardDeck>
            {spy.map((data, index) => (
                <Col md={12} >
                    <Card key={index} className='data mt-3'>
                        <Card.Title className="px-3 mt-1">{data.title} </Card.Title>
                        <Card.Body>
                            Ticker: {data.ticker}

                            <Card className="bg-">
                                <CanvasJSChart//refactor to map Apps.js
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

                        </Card.Body>
                        <Card.Text className='px-3'>{data.description}</Card.Text>
                        <Row className='justify-content-md-center mb-2'>
                            <Link to = {`/chart/${data.ticker}`} className="text-white">
                                <Button variant='success' size="sm" >Click to view ${data.ticker}</Button>
                            </Link>
                        </Row>
                        <Card.Footer>
                            <small className="text-muted">Powered by JavaScript</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </CardDeck>


    );
}

export default Spy;

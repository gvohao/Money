import './App.css';
import React from "react";
import Chart from "./Chart";
import Home from './Home';
import Navigation from "./Navigation";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DefaultChart from "./DefaultChart";
import Brokerages from "./brokerages";

function App() {
    const spy = [
        {
            title: 'SPDR S&P 500 ETF (SPY)',
            ticker: 'SPY',
            chart: 'how do do the chart',
            description: 'The SPDR S&P 500 Trust ETF, also known as the SPY ETF, is one of the most popular funds that aims to track the Standard & Poor\'s 500 Index, which comprises 500 large- and mid-cap U.S. stocks. '
        },
        // {
        //     title: 'Bitcoin/USD (BTCUSD)',
        //     ticker: 'BTCUSD',
        //     chart: 'how do do the chart',
        //     description: 'This is the most popular Bitcoin pair in the world. Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of Bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls this cryptocurrency and everyone can take part.'
        // },
    ]
    const qqq = [
        {
            title: 'Invesco QQQ ETF (QQQ)',
            ticker: 'QQQ',
            chart: 'how do do the chart',
            description: 'The Invesco QQQ ETF, which tracks the Nasdaq-100 Index, ranks in the top 1% of large-cap growth-funds. Since its formation in 1999, QQQ has demonstrated a history of outperformance, consistently beating the S&P 500 Index.'
        },
    ]
    const btcusd = [
        {
            title: 'Bitcoin/USD (BTCUSD)',
            ticker: 'BTCUSD',
            chart: 'how do do the chart',
            description: 'This is the most popular Bitcoin pair in the world. Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of Bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls this cryptocurrency and everyone can take part.'
        },
        ]
    const fxi = [
        {
            title: 'iShares China Large-Cap ETF',
            ticker: 'FXI',
            chart: 'how do do the chart',
            description: 'The iShares China Large-Cap ETF seeks to track the investment results of an index composed of large-capitalization Chinese equities that trade on the Hong Kong Stock Exchange.'
        },
    ]
    const ashr = [
        {
            title: 'Xtrackers Harvest CSI 300 China A-Shares ETF',
            ticker: 'ASHR',
            chart: 'how do do the chart',
            description: 'The index consists of 300 A-Share stocks listed on the Shenzen or Shanghai Stock Exchange. ASHR tracks an index of 300 biggest and most liquid stocks. The Xtrackers Harvest CSI 300 China A-Shares ETF (ASHR) was the first U.S.-listed ETF to offer direct exposure stocks listed in mainland Chinese markets in Shenzhen and Shanghai.'
        },
    ]

    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path = '/' exact>
                    <Home
                        spy={spy}
                        qqq={qqq}
                        btcusd={btcusd}
                        fxi={fxi}
                        ashr={ashr}
                    />
                </Route>

                <Route path = '/chart' exact >
                    <DefaultChart />
                </Route>

                <Route path = '/chart/:id'>
                    {/*//change to daily/ etf & sector based?*/}
                    <Chart />
                </Route>

                <Route path = '/brokerages' exact >
                    <Brokerages />
                </Route>



            </Switch>
        </BrowserRouter>

    );
};

export default App;

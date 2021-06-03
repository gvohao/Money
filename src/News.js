import React from 'react';
import ReactPlayer from "react-player";

function News(props) {
    return (
        <div >
            <h2 className='mt-5'>Latest Market News</h2>
            <ReactPlayer class= "reactPlayer" url='https://www.youtube.com/watch?v=KbupDZewx5U' />
            {/*<Card.Img src='https://image.cnbcfm.com/api/v1/image/106449894-833markcubanfull.jpg?v=1584536503' alt='some news photo' />*/}
            {/*<MarketNews />*/}
            <h5 className="mt-2">Peter Lynch: Secret To INVESTING in OVERPRICED MARKETS</h5>
            <h6 id='vidDesc'> Description:</h6>
            <p id='vidText'>Peter Lynch is one of the most successful and well-known investors of all time.
                Lynch is the legendary former manager of the Magellan Fund at the major investment brokerage Fidelity.
                He took over the fund in 1977 at age 33 and ran it for 13 years. His success allowed him to retire in 1990 at age 46.
                His investment style has been described as adaptive to the prevailing economic environment at the time,
                but Lynch always stressed that you should be able to understand what you own.</p>

        </div>
    );
}

export default News;

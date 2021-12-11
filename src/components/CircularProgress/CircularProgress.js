import React from 'react'
import Progressbar from 'react-js-progressbar';

function CircularProgress({ voteRate }) {
    return (
        <>
            <div id='progressbarContainer'>
                <Progressbar
                    input={voteRate}
                    pathWidth={20}
                    pathColor={['green', 'yellow']}
                    trailWidth={20}
                    size={50}
                    backgroundColor={'#000'}
                    trailColor='#363636'
                    textStyle={{ fill: '#fff' }}
                >
                </Progressbar>
            </div>
        </>
    );
}

export default CircularProgress

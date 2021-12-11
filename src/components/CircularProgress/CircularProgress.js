import React from 'react'
import Progressbar from 'react-js-progressbar';
import './CircularProgress.css'
function CircularProgress({ voteRate }) {
    return (
        <>
            <div className="progressbar" id='progressbarContainer'>
                <Progressbar
                    input={voteRate}
                    pathWidth={20}
                    pathColor={['green', 'yellow']}
                    trailWidth={20}
                    // size={45}
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

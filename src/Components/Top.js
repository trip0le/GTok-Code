import React from 'react'
import img1 from '../images/img1.png'

function top() {
    return (
        <div className="box">
            <div className="imgBx">
            <img src={require('../images/img1.png').default}/>
            </div>
            <div className="content">
                <h1>Feelings</h1>
                <h2>are Assets</h2>
                <p>A digital assets platform to share and trade feelings.<br/><br/><br/></p>
                <a href="#">Join Now</a>
                <p><br/></p>
            </div>
        </div>
    )
}

export default top

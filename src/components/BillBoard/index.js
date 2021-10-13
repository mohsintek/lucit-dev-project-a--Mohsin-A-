import React from 'react';
import ReactTimeAgo from 'react-time-ago'
import { GoLocation, GoMirror, GoClock } from "react-icons/go";
import './styles.css';

const BillBoard = ({ BillboardimageUrl, locationName, operator, playDatetime }) => {

    return (
        <div className="main">
            <div className="billboardImage">
                <img src={BillboardimageUrl} alt='billBoard'></img>
            </div>
            <div>
                <div className="detail">
                    <div><GoLocation className="icon" /><span className="spanItem"> {locationName}</span> </div>
                    <div><GoClock className="icon" /><span className="spanItem"> Last shown <b><ReactTimeAgo date={new Date(playDatetime)} /> ago</b></span></div>
                    <div><GoMirror className="icon" /><span className="spanItem"> Operator:<b> {operator}</b></span></div>
                </div>
            </div>
        </div>
    );
}

export default BillBoard;
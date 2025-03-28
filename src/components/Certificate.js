import React from 'react'
import crtiudmy1 from "../images/certi_udmy1.jpg";
import crtiudmy2 from "../images/certi_udmy2.jpg";
import crtisolid from "../images/certi_solid.png";
import crtiwdev from "../images/certi_wdev.jpg";
import crtilstn from "../images/certi_lstn.jpg";

const hrefs = {
    crtiudmy1,
    crtiudmy2,
    crtisolid,
    crtiwdev,
    crtilstn,
}

const Certificate = ({ certificate, num }) => {
    console.log("ci ", certificate.imgUrl);

    return (
        <div className="certificate">
            <div className="certi-title">{certificate.title}</div>
            <div className="certi-img">
                <img src={hrefs[certificate.imgUrl]} alt="" />
            </div>
            <div className="certi-crd">
                <div className="crti-num">{num}</div>
            </div>
        </div>
    )
}

export default Certificate
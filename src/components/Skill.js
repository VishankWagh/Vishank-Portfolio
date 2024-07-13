import React from 'react'
import react from "../images/reactjs.jpg";
import expressjs from "../images/expressjs.jpg";
import mongo from "../images/mongodb.jpg";
import nodejs from "../images/nodejs.jpg";
import htmlLogo from "../images/html.jpg";
import css from "../images/css.jpg";
import js from "../images/js.jpg";
import cProg from "../images/c.jpg";
import python from "../images/python.jpg";
import tailwind from "../images/tlwnd.png";
import othSkill from "../images/brain.png";

const hrefs = {
    react,
    expressjs,
    mongo,
    nodejs,
    htmlLogo,
    css,
    js,
    cProg,
    python,
    tailwind,
    othSkill
}

const Skill = ({ skill, percent, sklLogo }) => {
    return (
        <div className="skl-content">
            <div className="skl-logo">
                <img src={hrefs[sklLogo]} alt="" />
            </div>
            <div className="skl">
                <div className="skl-name">{skill}</div>
                <div className="skl-bar"><div className="skl-prcnt" style={{ width: `${percent}%` }}><div className="prcnt">{percent + "%"}</div></div></div>
            </div>
        </div>
    )
}

export default Skill
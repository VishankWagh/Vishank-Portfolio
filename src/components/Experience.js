import React from 'react'
import accio from '../images/accio_logo.png';
import mrLgg from '../images/mrlgg_logo.png';
import nvpd from '../images/nvpd_logo.png';
import react from "../images/reactjs.jpg";
import expressjs from "../images/expressjs.jpg";
import mongo from "../images/mongodb.jpg";
import java from "../images/java.jpg";
import nodejs from "../images/nodejs.jpg";
import othSkill from "../images/brain.png";

const hrefs = {
    accio,
    mrLgg,
    nvpd,
    react,
    expressjs,
    mongo,
    nodejs,
    java,
    othSkill
}

const Experience = ({ expr, first }) => {
    return (
        <div className={`experience ${first}`}>
            <div className="expr-maintitle">
                <span className="expr-logo"><img src={hrefs[expr.logo]} alt="" /></span>
                <span className="expr-title">
                    <a href="https://www.linkedin.com/company/mrloggage/">{expr.company}</a>
                </span>
                <span className="expr-role"> - {expr.role}</span>
            </div>
            <div className="position"><b>Role:</b><br />Internship</div>
            <div className="expr-duration">{expr.duration}</div>
            <div className="expr-desc">
                <ul>
                    {expr.desc.map((des, ind) => <li key={ind}>{des}</li>)}
                </ul>
            </div>
            <div className="expr-skills">
                <div className="expskill-title">Skills</div>
                <div className="expskill-list">
                    {expr.skills.map((skill, ind) => {
                        return <div key={ind} className="exp-skill">
                            <img src={hrefs[skill.logo]} alt="" />
                            <span className='text'>{skill.name}</span>
                        </div>
                    })}
                    {/* <div className="exp-skill">
                        <img src={react} alt="" />
                        <span className='text'>NodeJs</span>
                    </div>
                    <div className="exp-skill">
                        <img src={react} alt="" />
                        <span className='text'>ExpressJs</span>
                    </div>
                    <div className="exp-skill">
                        <img src={react} alt="" />
                        <span className='text'>MongoDb</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience
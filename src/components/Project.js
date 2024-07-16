import React from 'react'
import qbProj from "../images/proj_quikbuy.png";
import slmsProj from "../images/proj_slms.png";
import drnProj from "../images/proj_drone.png";
import pmdrProj from "../images/proj_pomodor.png";
import tchProj from "../images/proj_technology.png";
import tdoProj from "../images/proj_todo.png";
import orddkProj from "../images/proj_orderdesk.png";
import pfloProj from "../images/proj_pflio.png";

const hrefs = {
    qbProj,
    slmsProj,
    drnProj,
    pmdrProj,
    tchProj,
    tdoProj,
    orddkProj,
    pfloProj
}

const Project = ({ title, logo, desc, github, live, techs }) => {
    return (
        <div className="project">
            <div className="proj-img">
                <img src={hrefs[logo]} alt="" />
            </div>
            <div className="proj-content">
                <div className="proj-title">{title}</div>
                <div className="proj-desc">
                    <p>
                        {desc}
                    </p>

                </div>
                {live && <button className="proj-btn live-btn btn">
                    <a href={live} target="_blank" rel="noreferrer">
                        View Live <span className="material-symbols-outlined">
                            call_made
                        </span>
                    </a>
                </button>}
                {github && <button className="proj-btn btn">
                    <a href={github} target="_blank" rel="noreferrer">
                        Github link <span className="material-symbols-outlined">
                            call_made
                        </span>
                    </a>
                </button>}
                <div className="proj-lang">
                    <b>Technologies</b> : {techs}
                </div>
            </div>
        </div>
    )
}

export default Project
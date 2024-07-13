import React from 'react'
import Skill from './Skill'

const Skills = ({ title, skills, }) => {
    return (
        <div className="skills">
            <div className="skl-title">{title}</div>
            <div className="skill">
                {skills.map((skill, ind) => {
                    return <Skill key={ind} skill={skill.name} percent={skill.percent} sklLogo={skill.logo} />
                })}
                {/* <Skill skill="ReactJs" percent="70" sklLogo="react" /> */}
            </div>
        </div>
    )
}

export default Skills
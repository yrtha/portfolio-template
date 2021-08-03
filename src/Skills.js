import React from 'react'
import './Skills.css'
import Seperator from './Seperator';
import { SkillsData } from './SkillsData';
import SkillsCard from './SkillsCard';


function Skills() {
    const data=SkillsData;
    return (
        <div className="skills">
            <Seperator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
            {data.map((item)=>{
                return(
                    <div className="skills-section">
                        <label className="skills-section-ttle">{item.type}</label>
                        <div className="skills-list">
                            {item.lists.map((skill)=>{
                                return(
                                    <SkillsCard skill={skill} />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Skills

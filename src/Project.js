import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard';
import { ProjectData } from './ProjectData'
import Seperator from './Seperator';

function Project() {
    const data=ProjectData;
    return (
        <div className="projects">

            <Seperator />

            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>
                })}
            </div>


            
        </div>
    )
}

export default Project

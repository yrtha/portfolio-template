import React from 'react'
import './Work.css'
import Seperator from './Seperator'
import { WorkData } from './WorkData'
import WorkCard from './WorkCard';

function Work() {
    const data=WorkData;
    return (
        <div className="work">
            <Seperator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item=>{
                    return(
                        <WorkCard  item={item} />
                )
                }))}
            </div>
        </div>
    )
}

export default Work

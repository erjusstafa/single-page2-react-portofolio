import React from 'react'
import { LinearProgress } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Link } from "react-router-dom";




const Skills = () => {

    const [desc] = React.useState([
        { h3: 'I,M EXPERT ON', h1: 'Let,s Work Together', p: "Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae" },

    ])
    return (
        <div className="skills" id="skills">
            <div className="container">

                <div className="row ">

                    {desc.map((index) => (

                        <div className="col-6"  >

                            <div data-aos="fade-left" className="position">
                                <h3 className="skills-h3" >{index.h3}</h3>
                                <h1 className="skills-h1" > {index.h1} </h1>
                                <p className="skills-p"> {index.p} </p>
                                <div className="header-button">
                                    <Link to="/" className="btn btn-outline">Hire Me Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div data-aos="fade-right" className="all-skills">
                    <div className="skill">
                        <h3>React Js</h3>
                        <ChatBubbleOutlineIcon style={{ marginLeft: '50%' }} />
                        <LinearProgress className="linear-progress" variant="determinate" value={50} />
                    </div>
                    <div className="skill">
                        <h3>Node Js</h3>
                        <ChatBubbleOutlineIcon fill="34" style={{ marginLeft: '40%' }} />
                        <LinearProgress variant="determinate" value={40} />

                    </div><div className="skill">
                        <h3>Firebase</h3>
                        <ChatBubbleOutlineIcon style={{ marginLeft: '10%' }} />
                        <LinearProgress variant="determinate" value={10} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills;
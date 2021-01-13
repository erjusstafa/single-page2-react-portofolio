import React from 'react'
import {
    FaUsers,
    FaCodepen,
    FaTrophy,
    FaGithub
} from 'react-icons/fa'
import CountUp from 'react-countup';

const Project = () => {

    const [data] = React.useState([
        { icon: <FaUsers />, nr: '47', txt: 'Clients' },
        { icon: <FaCodepen />, nr: '62', txt: 'Projects' },
        { icon: <FaTrophy />, nr: '15', txt: 'Awards' },
        { icon: <FaGithub />, nr: '10', txt: 'Years Experience' }
    ])

    return (
        <div className="project" id="project">
            <div className="row" >
                {data.map((info) => (
                    <div className="col-1" style={{margin : '0 45px'}}>
                        <div className="icon"> {info.icon}</div>
                        <h1 className="project-nr"><CountUp end={info.nr}  duration={20}/></h1>
                        <h3 style={{textAlign: 'center' }}>{info.txt}</h3>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Project

import React from 'react'
import {
    FaCode,
    FaCamera,
    FaCodepen,
    FaApple,
    FaFileVideo,
    FaSearchPlus
} from 'react-icons/fa'





const Services = () => {



    const [header] = React.useState(
        {
            mainHeader: 'SERVICES',
            subHeading: 'My Services',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        })


    const [state] = React.useState([
        {
            id: 1,
            icon: <FaCode className="commonIcons" />,
            heading: 'Web Developer',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            id: 2,
            icon: <FaCamera className="commonIcons" />,
            heading: 'Photography',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            id: 3,
            icon: <FaCodepen className="commonIcons" />,
            heading: 'Web Design',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            id: 4,
            icon: <FaApple className="commonIcons" />,
            heading: 'App Developing',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            id: 5,
            icon: <FaFileVideo className="commonIcons" />,
            heading: 'Video Editing',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        },
        {
            id: 6,
            icon: <FaSearchPlus className="commonIcons" />,
            heading: 'SEO Expert',
            text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy'
        }]
    )

    return (
        
        <div className="services" id="services">
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p style={{ fontSize: '15px' }} className="main-content">{header.text}  </p>
                        <div className="common-border"></div>
                    </div>


                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services-box">
                                    {info.icon}
                                    <div className="services-box-header">{info.heading}</div>
                                    <div className="services-box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services


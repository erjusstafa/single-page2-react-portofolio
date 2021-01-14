import React from 'react';


const About = () => {


    const [state] = React.useState(
        {
            subHeader: 'About Me',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.',
        })

    const [info] = React.useState([
        { id: 1, title: 'Name : ', text: 'Erjus Stafa' },
        { id: 2, title: 'Email : ', text: 'erjus.stafa@gmail.com' },
        { id: 3, title: 'Phone :', text: '+355 69 76 458 93' },
        { id: 4, title: 'LinkedIn :', text: 'erjus_stafa' }
    ])
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="common">
                    <h1 className="main-header">{state.subHeader}</h1>
                    <p style={{ fontSize: '15px' }} className="main-content">{state.text} </p>
                    <div className="common-border"></div>
                </div>

                <div className="info-contact">
                    <div className="row" h-650 alignCenter>

                        {
                            info.map((index) => (

                                <div className="col-6">
                                    <strong style={{ fontSize: '25px', color: '#ff4a57' }}>{index.title}</strong>
                                    <p style={{ marginBottom: '40px' }}>{index.text}</p>
                                </div>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

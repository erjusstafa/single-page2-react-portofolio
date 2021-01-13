import React from 'react'
import { Card } from '@material-ui/core';

const Portofolio = () => {

    const [portofolio] = React.useState(
        {
            myHeader: 'ALL MY WORK ON ONE WEBSITE',
            subHeader: 'Portfolio Showcase',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.',
        })

    const [buton] = React.useState([
        { id: 1, txt: 'All Works' },
        { id: 2, txt: 'Art Direction' },
        { id: 3, txt: 'Branding' },
        { id: 4, txt: 'Design' },
        { id: 5, txt: 'Web' }]
    )

    const [images1] = React.useState([
        { src: "https://themebing.com/html/amike/assets/images/p-1.jpg" },
        { src: "https://themebing.com/html/amike/assets/images/p-2.jpg" },
        { src: "https://themebing.com/html/amike/assets/images/p-3.jpg" },
        { src: "https://themebing.com/html/amike/assets/images/p-6.jpg" }
    ])


    // const [images2] = React.useState([
    //     { src: "https://themebing.com/html/amike/assets/images/p-4.jpg" },
    // ])


    return (

        <div className="portofolio" id="portofolio">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{portofolio.myHeader}</h3>
                    <h1 className="main-header">{portofolio.subHeader}</h1>
                    <p style={{ fontSize: '15px' }} className="main-content">{portofolio.text} </p>
                    <div className="common-border"></div>
                </div>
                <div className="row  h-650 align-center">

                    {buton.map((x) => (

                        <div className="chooise-button">
                            <ul className="ul-list">
                            <li>
                                <a href="" className="btn btn-outline">{x.txt}</a>
                            </li>
                            </ul>
                        </div>
                    ))}
                </div>

                
                    <div className="row">
                        {images1.map((y) => (
                            
                                <Card className="img-1" style={{ width: '300px', height: '300px' }}>
                                    <img src={y.src} alt="logo"/>
                                    <div className="caption">
                                        <h1>x</h1>
                                    </div>
                                </Card>
                            
                        ))}
                </div>

                
                {/* <div className = "h-650 align-center" >
                    {images2.map((a) => (
                        <div className="col-6">
                            <Card className="img-2" style={{ width: '300px', height: '500px' }}>
                                <img src={a.src} alt="logo" />
                            </Card>
                        </div>
                    ))}
                </div> */}

            </div>
        </div>
    )
}

export default Portofolio

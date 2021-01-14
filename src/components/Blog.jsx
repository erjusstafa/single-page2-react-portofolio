import React from 'react'
import { Card } from '@material-ui/core'
import { FaQuoteRight } from 'react-icons/fa';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";



const Blog = () => {

    var value = 4;

    const [desc] = React.useState([
        {
            h3: 'OUR TESTIMONIALS',
            h1: 'Happy Clients Says',
            p1: "Phasellus accumsan scelerisque dolor, quis mattis justo  varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            p2: "enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
        }])

    const [quotes] = React.useState(
        {
            paragraph: '"In promotion and of advertising testimonal  show consiss of a person , written  orsoken  statemment extoling the virtue"',
            name: 'Saad Lamjarred',
            title: 'CEO of a Company'
        })


    const [images] = React.useState([
        { avt: 'https://tse1.mm.bing.net/th?id=OIP.nxLdmMwn7USKBgRBoxtYXwHaHZ&pid=Api&P=0&w=187&h=188' },
        { avt: 'https://thumbs.dreamstime.com/z/isolated-business-woman-portrait-office-worker-female-model-43454726.jpg' },
        { avt: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg' },
        { avt: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' }

    ])

    return (

        <div className="blog" id="blog">
            <div className="container-blog">
                <div className="row" >
                    {desc.map((index) => (
                        <div className="col-6">

                            <div data-aos="fade-right" className="position">
                                <h3 className="skills-h3" >{index.h3}</h3>
                                <h1 className="skills-h1" > {index.h1} </h1>
                                <p className="skills-p" > {index.p1} </p>
                                <p className="skills-p"> {index.p2} </p>
                                <div className="header-button">
                                    <Link to="/" className="btn btn-outline">Hire Me Now</Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="all-skills">
                    <Card data-aos="fade-left" className="card-blog" style={{ backgroundColor: '#1f2235' }}>
                        <div className="card-1">
                            <FaQuoteRight className="quotes" />
                            <p className="paragraph">{quotes.paragraph}</p><br />
                            <Typography>
                                <Rating className="star" name="read-only" value={value} readOnly />
                            </Typography>
                        </div>
                        {images.map((img) => (
                            <img className="avatar-blog" src={img.avt} alt="avatar" />
                        ))}

                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Blog

import React from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Contact = () => {


    const [header] = React.useState(
        {
            mainHeader: 'HAVE ANY QUERY?  ',
            subHeading: 'Contact Me ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        })

    const [contact] = React.useState([
        { icon: <FaMapMarker />, h3: 'Locate us', p: 'King Street, Melbourne Victoria' },
        { icon: <FaPhone />, h3: 'Give us a call', p: 'Office: +355 00 000 00' },
        { icon: <FaEnvelope />, h3: 'Get in online', p: 'contact@example.com' }
    ])



    const [value, setValue] = React.useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (event) => {
        setValue({ value: event.target.value });
    }

    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }


    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="main-header">{header.subHeading}</h1>
                    <p style={{ fontSize: '15px' }} className="main-content">{header.text}  </p>
                    <div className="common-border"></div>
                </div>

                <div className="row-1">
                    {contact.map((info) => (
                        <div className="col-4">
                                <div className="services-box" >
                                    {info.icon}
                                    <div className="services-box-p">{info.h3}</div>
                                    <div className="services-box-p">{info.p}</div>
                            </div>
                        </div>
                    ))}
                </div>

                

<form  onSubmit={handleSubmit}>
                    <div className="form">
                        <input className="input" value={value.name} type="text" placeholder="Your Name" onChange={handleChange} />
                        <input className="input" value={value.email} type="email" placeholder="Your email" onChange={handleChange} />
                    </div>
                    <div className="text-area">
                        <input className="input-text"
                            value={value.subject}
                            type="text"
                            placeholder="Your Subject"
                            onChange={handleChange}
                        />
                        <textarea className="input-text"
                            style={{height: "200px" }}
                            value={value.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                        />
                        <div className="row">
                            <Link to="/" className="btn btn-smart" onClick={handleSubmit} style={{marginTop : '40px ' }}>Send Message</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

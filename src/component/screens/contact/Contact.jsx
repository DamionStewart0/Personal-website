import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';


export default function Contact(props) {

    const [formData, setFormData] = useState('');

    const {username, email, description} = formData;
    const [isCreated, setCreated] = useState(false);
    const {  handleChange } = props;

    // if ( isCreated ) {
    //     return <Redirect to='/landingpage' />
    // }


    return (
        <div className="contact-container">
            <div className='contact-text'>
                <h3>Damion Stewart</h3>
                <h4>West Orange, NJ</h4>
                <h5>Resume available by request</h5>
                <div className='fa-icons'>
                    <FaGithub />
                    <FaLinkedin />
                    <FaEnvelope />

                </div>

            </div>

        </div>
    )
}

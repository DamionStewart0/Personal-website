import React, { useState } from 'react';
import {  Redirect } from "react-router-dom";
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
            <form 
             onSubmit={handleChange}
             >

            <div className="name-input">
            <input 
            type="text"
            placeholder="name"
            name="username"
            value={username}
            handleChange={() => {}}
            autoFocus
            />
            </div>
            <div className="email-input">
            <input 
            type="text"
            placeholder="email"
            name="email"
            value={email}
            handleChange={() => {}}
            />
            </div>

            <div className="description-input">
            <textarea
            type="text"
            rows={10}
            cols={30}
            placeholder="Description"
            name="description"
            value={description}
            handleChange={() => {}}
            />
            </div>
            </form>
            <div className="btn-container">
                <button className="btn">Submit</button>
            </div>
             


        </div>
    )
}

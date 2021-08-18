import React from 'react'
import Form from '../components/contact/Form'
import Address from '../components/contact/Address'


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__details">
                <Form />
                <Address />
            </div>

            <div className="contact__background">&nbsp;</div>
            <div className="contact__circle--1">&nbsp;</div>
            <div className="contact__circle--2">&nbsp;</div>
        </div>
    )
}



export default Contact

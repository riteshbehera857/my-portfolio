import React, { useState } from 'react'


const Form = () => {

    const [value, setValue] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (event) => {
        const input = event.target.value
        const name = event.target.name

        setValue((prevValue) => {
            if (name === "fname") {
                return {
                    fname: input,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    phone: prevValue.phone,
                    message: prevValue.message,
                }
            } else if (name === "lname") {
                return {
                    fname: prevValue.fname,
                    lname: input,
                    email: prevValue.email,
                    phone: prevValue.phone,
                    message: prevValue.message,
                }
            } else if (name === "email") {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: input,
                    phone: prevValue.phone,
                    message: prevValue.message,
                }
            } else if (name === "phone") {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    phone: input,
                    message: prevValue.message,
                }
            } else {
                return {
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    phone: prevValue.phone,
                    message: input,
                }
            }
        }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted")
    }

    return (
        <form onSubmit={handleSubmit} className="contact__form" action="/contact" method="post">
            <input
                type="text"
                name="fname"
                className="contact__fname"
                placeholder="First Name"
                autocomplete="none"
                required
                onChange={handleChange}
                value={value.fname}
            />
            <input
                type="text"
                name="lname"
                className="contact__lname"
                placeholder="Last Name"
                autocomplete="none"
                required
                onChange={handleChange}
                value={value.lname}
            />
            <input
                type="email"
                name="email"
                className="contact__email"
                placeholder="Email Address"
                autocomplete="none"
                required
                onChange={handleChange}
                value={value.email}
            />
            <input
                type="text"
                name="phone"
                className="contact__mobile"
                placeholder="Mobile No."
                autocomplete="none"
                required
                onChange={handleChange}
                value={value.phone}
            />
            <input
                type="text"
                name="message"
                className="contact__message"
                placeholder="Message"
                autocomplete="none"
                required
                onChange={handleChange}
                value={value.message}
            />

            <button type="submit" class="btn-contact">Send</button>
        </form>
    )
}

export default Form

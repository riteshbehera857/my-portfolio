import React from 'react'
// import addressData from './addressData';

const Address = () => {
    return (
        <div class="contact__address flex-col flex-col--jc-sa">

            <div class="contact__resident flex-row flex-row--jc-sb">
                <img
                    src="/images/location.svg"
                    alt=""
                    class="contact__resident--icon"
                />
                <p class="contact__resident--place">kendrapada, Odisha, India</p>
            </div>

            <div class="contact__phone flex-row flex-row--jc-sb">
                <img
                    src="/images/phone.svg"
                    alt=""
                    class="contact__phone--icon"
                />
                <p class="contact__resident--phone">89175583758, 8458010717</p>
            </div>

            <div class="contact__mail flex-row flex-row--jc-sb">
                <img
                    src="/images/email.svg"
                    alt=""
                    class="contact__mail--icon"
                />
                <p class="contact__resident--email">riteshbehera857@gmail.com</p>
            </div>

            <div class="contact__social flex-row flex-row--jc-ce">
                <img
                    src="images/email-icon.svg"
                    alt=""
                    class="contact__social--icon"
                />
                <img
                    src="images/github-icon.svg"
                    alt=""
                    class="contact__social--icon"
                />
                <img
                    src="images/facebook-icon.svg"
                    alt=""
                    class="contact__social--icon"
                />
            </div>
        </div>
    )
}

export default Address

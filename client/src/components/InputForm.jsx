import React, { useState } from 'react'
import "../styles/components/InputForm.css"
import inputformimage from "../assets/inputFormImage.svg"
import emailjs from "emailjs-com";
function InputForm() {
    function sendEmail(e) {
        // e.preventDefault();
        emailjs.sendForm('service_m8vobk3', 'template_k4okhx6', e.target, 'rhPm4JvILLRU7IAWk').then(res=>
            {
                console.log(res);
            }).catch(err=> console.log(err));
    }
    return (
        <>
            <form className='home-input-form' onSubmit={sendEmail}>
                <input type="text" placeholder="Enter your name" name="name" className='home-input-form-name' />
                <input type="email" placeholder='Enter your email' name='userEmail' className='home-input-form-name'/>
                <input type="text" placeholder="Your Query" name='message' className='home-input-form-message' />
                <div className='home-bottom-input-form'>
                    {/* <img src={inputformimage} alt="mailus" className='input-form-image' /> */}
                    <button className="button-home-input-form" type='submit' value="Send">
                        submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default InputForm
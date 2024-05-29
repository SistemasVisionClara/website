
import React from "react";
import { Link } from "react-router-dom";

const WhatsApp = () =>{

    const WhatStyle= {
        position: 'fixed',
        right: '0%',
        bottom: '0%',
        fontSize: '14px',
        padding: '25px',
        margin: '10px',
        backgroundColor: '#25d366',
        color: 'white',
        borderRadius: '50%',
        border: '2px solid #fff',
    };





return (

    <div >
        <Link to='https://wa.me/541120106330' target="_blank">
        <button className="whatsapp" style={WhatStyle}>
            WhatsApp
        </button>
        </Link>
    </div>


);




}


export default WhatsApp;
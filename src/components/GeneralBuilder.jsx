import React from 'react';
import emailIcon from '../img/email.svg';
import phoneIcon from '../img/phone.svg';
import locationIcon from '../img/location.svg';

const GeneralBuilder = ({ name, email, phone, location }) => {
    const formatPhoneNumber = (phone) => {
        return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
    };
    
    return (
        <div className="general">
            <h2 style={{ textAlign: 'center', marginBottom: '0' }}>{name}</h2>
            <div className="contacts">
                <div className="icons">
                    <img src={emailIcon} alt="email icon" />
                    <p>{email}</p>
                </div>
                <div className="icons">
                    <img src={phoneIcon} alt="phone icon"/>
                    <p>{formatPhoneNumber(phone)}</p>
                </div>
                <div className="icons">
                    <img src={locationIcon} alt="location icon" />
                    <p>{location}</p>
                </div>
                
            </div>
        </div>
    );
}

export default GeneralBuilder;
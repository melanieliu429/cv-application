import React from 'react';
import './components.css';

const ExperienceBuilder = ({ title, company, startDate, endDate, description }) => {
    return (
        <div className="experience">
            <p style={{ fontWeight: 'bold', marginBottom: '0' }}>{title} | {company}</p>
            <p style={{ color: 'gray', marginTop: '4px', marginBottom: '4px' }}>{startDate} - {endDate}</p>
            <li>{description}</li>
        </div>
    );
}

export default ExperienceBuilder;
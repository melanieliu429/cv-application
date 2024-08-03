import React from 'react';

const ExperienceBuilder = ({ title, company, startDate, endDate, description }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const start = new Date(startDate).toLocaleDateString(undefined, options);  
    const end = new Date(endDate).toLocaleDateString(undefined, options);  

    
    return (
        <div className="experience">
            <p style={{ fontWeight: 'bold', marginBottom: '0' }}>{title} | {company}</p>
            <p style={{ color: 'gray', marginTop: '4px', marginBottom: '4px' }}>{ start } - { end }</p>
            <li>{description}</li>
        </div>
    );
}

export default ExperienceBuilder;
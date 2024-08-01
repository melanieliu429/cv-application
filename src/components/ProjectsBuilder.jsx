import React from 'react';
import './components.css';

const ProjectsBuilder = ({ title, subtitle, startDate, endDate, description }) => {
    return (
      <div>
        <h2>PROJECTS</h2>
        <p style={{ fontWeight: 'bold', marginBottom: '0' }}>{ title } | { subtitle }</p>
        <p style={{ color: 'gray', marginTop: '4px', marginBottom: '4px' }}>{ startDate } - { endDate }</p>
        <li>{ description }</li>
      </div>
    );
  }

  export default ProjectsBuilder;
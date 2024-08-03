import React from 'react';

const ProjectsBuilder = ({ title, subtitle, startDate, endDate, description }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const start = new Date(startDate).toLocaleDateString(undefined, options);  
  const end = new Date(endDate).toLocaleDateString(undefined, options);  

  return (
      <div>
        <p style={{ fontWeight: 'bold', marginBottom: '0' }}>{ title } | { subtitle }</p>
        <p style={{ color: 'gray', marginTop: '4px', marginBottom: '4px' }}>{ start } - { end }</p>
        <li>{ description }</li>
      </div>
    );
  }

  export default ProjectsBuilder;
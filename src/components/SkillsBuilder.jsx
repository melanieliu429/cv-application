import React from 'react';
import './components.css';

const SkillsBuilder = ({ name, category, proficiency, yearsOfExperience, description }) => {
    return (
      <div className="general">
        <h2>SKILLS</h2>
        <div style={{ marginTop: '0', marginBottom: '0' }} className="skill">
            <p style={{ marginTop: '0', marginBottom: '0' }}>{ name }</p>
            <p style={{ marginTop: '0', marginBottom: '0', color: 'gray' }}>{ category }</p>
        </div>
        <p style={{ color: 'gray', marginTop: '4px', marginBottom: '0' }}><em>{ proficiency }</em></p>
        <p style={{ fontSize: '0.9rem', marginTop: '10px', marginBottom: '5px' }}>Experience: { yearsOfExperience } years</p>
        <li>{ description }</li>
      </div>
    );
  }

  export default SkillsBuilder;
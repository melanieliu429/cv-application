import React, { useState } from 'react'
import "./components.css"

export default function Skills() {
    const [skills, setSkills] = useState({
        name: 'React JS',
        proficiency: 'Beginner',
        category: 'Software',
        yearsOfExperience: '2',
        description: 'Build dynamic user interfaces.'
    });
    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setSkills(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state:', skills); // Debugging line to see the current state
        if (skills && skills.name) {
            alert(`Name: ${skills.name}`);
        } else {
            alert('Name is undefined');
        }
    }
  return (
    <div>
        <form>
            <h2>Skills</h2>
            <label>name</label>
            <input onChange={handleInputChange} type="text" name="name" value={skills.name} />
            <label>proficiency</label>
            <input onChange={handleInputChange} type="text" name="proficiency" value={skills.proficiency} />
            <label>category</label>
            <input onChange={handleInputChange} type="text" name="category" value={skills.category} />
            <label>yearsOfExperience</label>
            <input onChange={handleInputChange} type="number" name="yearsOfExperience" value={skills.yearsOfExperience} />
            <label>Description</label>
            <textarea onChange={handleInputChange} name="description" value={skills.description}></textarea>
            <button type="submit">Submit</button>
        </form>
        <SkillsBuilder {...skills} />
    </div>
  );
}

export const SkillsBuilder = ({ name, proficiency, category, yearsOfExperience, description }) => {
    return (
      <div className="general">
        <p>{ name }</p>
        <p>{ proficiency }</p>
        <p>{ category }</p>
        <p>{ yearsOfExperience }</p>
        <p>{ description }</p>
      </div>
    );
  }



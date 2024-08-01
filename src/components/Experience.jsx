import React, { useState } from 'react'
import "./components.css"

export default function Experience() {
    const [experience, setexperience] = useState({
        title: 'Software Engineer',
        company: 'Mojang',
        startDate: 'April 22, 2011',
        endDate: 'August 14, 2015',
        description: 'Design, architect, develop, test, and deploy software solutions that meet customer requirements. Work in teams to produce high-quality software products. Create software architectures, designs, and specifications.'
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setexperience(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state:', experience); // Debugging line to see the current state
        if (experience && experience.name) {
            alert(`Name: ${experience.name}`);
        } else {
            alert('Name is undefined');
        }
    }
  return (
    <div>
        <form>
            <h2>Experience</h2>
            <label>Title</label>
            <input onChange={handleInputChange} type="text" name="title" value={experience.title} />
            <label>company</label>
            <input onChange={handleInputChange} type="text" name="company" value={experience.company} />
            <label>Start Date</label>
            <input onChange={handleInputChange} type="date" name="startDate" value={experience.startDate} />
            <label>End Date</label>
            <input onChange={handleInputChange} type="date" name="endDate" value={experience.endDate} />
            <label>Description</label>
            <textarea onChange={handleInputChange} name="description" value={experience.description}></textarea>
            <button type="submit">Submit</button>
        </form>
        <ExperienceBuilder {...experience} />
    </div>
    
  );
}

  export const ExperienceBuilder = ({ title, company, startDate, endDate, description }) => {
    return (
      <div className="general">
        <h1 style={{ textAlign: 'center' }}>{ name }</h1>
        <h1>{ title }</h1>
        <h1>{ company }</h1>
        <h1>{ endDate }</h1>
        <h1>{ startDate }</h1>
        <h1>{ description }</h1>
      </div>
    );
  }
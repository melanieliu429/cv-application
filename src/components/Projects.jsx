import React, { useState } from 'react'
import "./components.css"

export default function Projects() {
    const [projects, setProjects] = useState({
        title: 'Minecraft',
        subtitle: 'Mod Creator',
        startDate: 'May 27, 2016',
        endDate: 'September 11, 2016',
        description: 'I developed cool lucky block mods for Youtubers to use!'
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setProjects(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state:', projects); // Debugging line to see the current state
        if (projects && projects.name) {
            alert(`Name: ${projects.name}`);
        } else {
            alert('Name is undefined');
        }
    }
  return (
    <div>
        <form>
            <h2>Projects</h2>
            <label>Title</label>
            <input onChange={handleInputChange} type="text" name="title" value={projects.title} />
            <label>Subtitle</label>
            <input onChange={handleInputChange} type="text" name="subtitle" value={projects.subtitle} />
            <label>Start Date</label>
            <input onChange={handleInputChange} type="date" name="startDate" value={projects.startDate} />
            <label>End Date</label>
            <input onChange={handleInputChange} type="date" name="endDate" value={projects.endDate} />
            <label>Description</label>
            <textarea onChange={handleInputChange} name="description" value={projects.description}></textarea>
            <button type="submit">Submit</button>
        </form>
        <ProjectsBuilder {...projects} />
    </div>
    
  );
}

  export const ProjectsBuilder = ({ title, subtitle, startDate, endDate, description }) => {
    return (
      <div>
        <h1>{ title }</h1>
        <h1>{ subtitle }</h1>
        <h1>{ endDate }</h1>
        <h1>{ startDate }</h1>
        <h1>{ description }</h1>
      </div>
    );
  }
import React, { useState } from 'react'
import "./components.css";
export default function Skills({ skills, handleInputChange }) {
    
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
            <div className="buttons">
              <button className="add" type="submit">Add</button>
              <button className="delete" type="submit">Delete</button>
          </div>
        </form>
    </div>
  );
}





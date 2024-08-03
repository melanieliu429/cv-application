import React, { useState } from 'react'

export default function Skills({ skills, handleInputChange }) {
    
  return (
    <div>
        <form>
            <label>name</label>
            <input onChange={handleInputChange} type="text" name="name" value={skills.name} />
            <label>proficiency</label>
            <input onChange={handleInputChange} type="text" name="proficiency" value={skills.proficiency} />
            <label>category</label>
            <input onChange={handleInputChange} type="text" name="category" value={skills.category} />
            <label>Years of Experience</label>
            <input onChange={handleInputChange} type="number" name="yearsOfExperience" value={skills.yearsOfExperience} />
            <label>Description</label>
            <textarea rows="6" onChange={handleInputChange} name="description" value={skills.description}></textarea>
        </form>
    </div>
  );
}





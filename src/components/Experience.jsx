import React, { useState } from 'react'
import "./components.css"

export default function Experience({ experience, handleInputChange }) {
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Current state:', experience);
      if (experience && experience.title) {
          alert(`Title: ${experience.title}`);
      } else {
          alert('Title is undefined');
      }
  }

  return (
      <form>
          <h2>Experience</h2>
          <label>Title</label>
          <input onChange={handleInputChange} type="text" name="title" value={experience.title} />
          <label>Company</label>
          <input onChange={handleInputChange} type="text" name="company" value={experience.company} />
          <label>Start Date</label>
          <input onChange={handleInputChange} type="date" name="startDate" value={experience.startDate} />
          <label>End Date</label>
          <input onChange={handleInputChange} type="date" name="endDate" value={experience.endDate} />
          <label>Description</label>
          <textarea onChange={handleInputChange} name="description" value={experience.description}></textarea>
          <div className="buttons">
            <button className="add" type="submit">Add</button>
            <button className="delete" type="submit">Delete</button>
          </div>
      </form>
  );
}
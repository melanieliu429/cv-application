import React, { useState } from 'react'

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
          <label>Title</label>
          <input onChange={handleInputChange} type="text" name="title" value={experience.title} />
          <label>Company</label>
          <input onChange={handleInputChange} type="text" name="company" value={experience.company} />
          <label>Start Date</label>
          <input onChange={handleInputChange} type="date" name="startDate" value={experience.startDate} />
          <label>End Date</label>
          <input onChange={handleInputChange} type="date" name="endDate" value={experience.endDate} />
          <label>Description</label>
          <textarea rows="6" onChange={handleInputChange} name="description" value={experience.description}></textarea>
      </form>
  );
}
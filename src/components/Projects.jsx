import React from 'react';

export default function Projects({ project, handleInputChange }) {
    return (
        <div>
            <form>
                <label>Title</label>
                <input onChange={handleInputChange} type="text" name="title" value={project.title} />
                <label>Subtitle</label>
                <input onChange={handleInputChange} type="text" name="subtitle" value={project.subtitle} />
                <label>Start Date</label>
                <input onChange={handleInputChange} type="date" name="startDate" value={project.startDate} />
                <label>End Date</label>
                <input onChange={handleInputChange} type="date" name="endDate" value={project.endDate} />
                <label>Description</label>
                <textarea rows="6" onChange={handleInputChange} name="description" value={project.description}></textarea>
            </form>
        </div>
    );
}
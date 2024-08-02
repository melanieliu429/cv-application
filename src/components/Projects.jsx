// import React, { useState } from 'react'
// import "./components.css"

// export default function General({ projects, handleInputChange }) {
    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Current state:', projects); // Debugging line to see the current state
//         if (projects && projects.name) {
//             alert(`Name: ${projects.name}`);
//         } else {
//             alert('Name is undefined');
//         }
//     }
//   return (
//     <div>
//         <form>
//             <h2>Projects</h2>
//             <label>Title</label>
//             <input onChange={handleInputChange} type="text" name="title" value={projects.title} />
//             <label>Subtitle</label>
//             <input onChange={handleInputChange} type="text" name="subtitle" value={projects.subtitle} />
//             <label>Start Date</label>
//             <input onChange={handleInputChange} type="date" name="startDate" value={projects.startDate} />
//             <label>End Date</label>
//             <input onChange={handleInputChange} type="date" name="endDate" value={projects.endDate} />
//             <label>Description</label>
//             <textarea onChange={handleInputChange} name="description" value={projects.description}></textarea>
//             {/* <div className="buttons">
//               <button className="add" type="submit">Add</button>
//               <button className="delete" type="submit">Delete</button>
//             </div> */}
//         </form>
//     </div>
    
//   );
// }

import React from 'react';
import './components.css';

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
                <textarea onChange={handleInputChange} name="description" value={project.description}></textarea>
            </form>
        </div>
    );
}
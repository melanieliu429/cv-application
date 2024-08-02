// import React, { useState } from 'react';
// import General from './components/General';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import GeneralBuilder from './components/GeneralBuilder';
// import ProjectsBuilder from './components/ProjectsBuilder';
// import ExperienceBuilder from './components/ExperienceBuilder';
// import SkillsBuilder from './components/SkillsBuilder';
// import './components/components.css';

// function App() {
//     project = [];

//     const [general, setGeneral] = useState({
//         name: 'Melanie Liu',
//         email: 'melanieliu@berkeley.edu',
//         phone: '4158166906',
//         location: 'Castro Valley, CA'
//     });

//     const [projects, setProjects] = useState({
//         title: 'Minecraft',
//         subtitle: 'Mod Creator',
//         startDate: '2016-05-27',
//         endDate: '2016-09-11',
//         description: 'I developed cool lucky block mods for Youtubers to use!'
//     });

//     const [experience, setExperience] = useState({
//         title: 'Software Engineer',
//         company: 'Mojang',
//         startDate: '2011-04-22',
//         endDate: '2015-08-14',
//         description: 'Design, architect, develop, test, and deploy software solutions that meet customer requirements. Work in teams to produce high-quality software products. Create software architectures, designs, and specifications.'
//     });

//     const [skills, setSkills] = useState({
//         name: 'React JS',
//         category: 'Javascript Library',
//         proficiency: 'Beginner',
//         yearsOfExperience: '2',
//         description: 'Library used to Build FrontEnd Applications with Ease. It lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'
//     });

//     function handleInputChange(e, setState) {
//         const { name, value } = e.target;
//         setState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     }

//     function handleClick() {
//         projects.append[project];
//         return <Projects projects={projects} handleInputChange={(e) => handleInputChange(e, setProjects)} />
//     }

//     return (
//         <div className="container">
//             <div className="input">
//                 <General general={general} handleInputChange={(e) => handleInputChange(e, setGeneral)} />
//                 <Projects projects={projects} handleInputChange={(e) => handleInputChange(e, setProjects)} />
//                 <div className="buttons">
//                     <button onClick={ handleClick } className="add" type="submit">Add</button>
//                     <button className="delete" type="submit">Delete</button>
//                 </div>
//                 <Experience experience={experience} handleInputChange={(e) => handleInputChange(e, setExperience)} />
//                 <Skills skills={skills} handleInputChange={(e) => handleInputChange(e, setSkills)} />
//             </div>
//             <div className="resume">
//                 <GeneralBuilder {...general} />
//                 <ProjectsBuilder {...projects} />
//                 <ExperienceBuilder {...experience} />
//                 <SkillsBuilder {...skills} />
//             </div>
//         </div>
//     );
// }

// export default App;
import React, { useState } from 'react';
import General from './components/General';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GeneralBuilder from './components/GeneralBuilder';
import ProjectsBuilder from './components/ProjectsBuilder';
import ExperienceBuilder from './components/ExperienceBuilder';
import SkillsBuilder from './components/SkillsBuilder';
import './components/components.css';

function App() {
    const [general, setGeneral] = useState({
        name: 'Melanie Liu',
        email: 'melanieliu@berkeley.edu',
        phone: '4158166906',
        location: 'Castro Valley, CA'
    });

    const [projects, setProjects] = useState([
        {
            title: 'Minecraft',
            subtitle: 'Mod Creator',
            startDate: '2016-05-27',
            endDate: '2016-09-11',
            description: 'I developed cool lucky block mods for Youtubers to use!'
        }
    ]);

    const [experience, setExperience] = useState([
        {
            title: 'Software Engineer',
            company: 'Mojang',
            startDate: '2011-04-22',
            endDate: '2015-08-14',
            description: 'Design, architect, develop, test, and deploy software solutions that meet customer requirements. Work in teams to produce high-quality software products. Create software architectures, designs, and specifications.'
        }
    ]);

    const [skills, setSkills] = useState([
        {
            name: 'React JS',
            category: 'Javascript Library',
            proficiency: 'Beginner',
            yearsOfExperience: '2',
            description: 'Library used to Build FrontEnd Applications with Ease. It lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'
        }
    ]);

    function handleInputChange(e, setState) {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleProjectChange(index, e) {
        const { name, value } = e.target;
        const newProjects = [...projects];
        newProjects[index][name] = value;
        setProjects(newProjects);
    }

    function handleAddProject() {
        setProjects([...projects, {
            title: '',
            subtitle: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    function handleDeleteProject(index) {
        const newProjects = projects.filter((_, i) => i !== index);
        setProjects(newProjects);
    }

    function handleExperienceChange(index, e) {
        const { name, value } = e.target;
        const newExperience = [...experience];
        newExperience[index][name] = value;
        setExperience(newExperience);
    }

    function handleAddExperience() {
        setExperience([...experience, {
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    function handleDeleteExperience(index) {
        const newExperience = experience.filter((_, i) => i !== index);
        setExperience(newExperience);
    }

    function handleSkillsChange(index, e) {
        const { name, value } = e.target;
        const newSkills = [...skills];
        newSkills[index][name] = value;
        setSkills(newSkills);
    }

    function handleAddSkills() {
        setSkills([...skills, {
            name: '',
            category: '',
            proficiency: '',
            yearsOfExperience: '',
            description: ''
        }]);
    }

    function handleDeleteSkills(index) {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    }

    return (
        <div className="container">
            <div className="input">
                <General general={general} handleInputChange={(e) => handleInputChange(e, setGeneral)} />
                <div className="header">
                    <h2>Projects</h2>
                    <div className="buttons">
                        <button onClick={handleAddProject} className="add" type="button">Add Project</button>
                    </div>
                </div>
                
                {projects.map((project, index) => (
                    <div key={index} className="project-container">
                        <Projects
                            project={project}
                            handleInputChange={(e) => handleProjectChange(index, e)}
                        />
                        <button
                            onClick={() => handleDeleteProject(index)}
                            className="delete"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
                
                <div className="header">
                    <h2>Experience</h2>
                    <div className="buttons">
                    <button onClick={handleAddExperience} className="add" type="button">Add Experience</button>
                    </div>
                </div>
                {experience.map((exp, index) => (
                    <div key={index} className="experience-container">
                        <Experience
                            experience={exp}
                            handleInputChange={(e) => handleExperienceChange(index, e)}
                        />
                        <button
                            onClick={() => handleDeleteExperience(index)}
                            className="delete"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
                
                <div className="header">
                    <h2>Skills</h2>
                    <div className="buttons">
                        <button onClick={handleAddSkills} className="add" type="button">Add Skills</button>
                </div>
                </div>
                {skills.map((skill, index) => (
                    <div key={index} className="skills-container">
                        <Skills
                            skills={skill}
                            handleInputChange={(e) => handleSkillsChange(index, e)}
                        />
                        <button
                            onClick={() => handleDeleteSkills(index)}
                            className="delete"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
                
            </div>
            <div className="resume">
                <GeneralBuilder {...general} />
                <h2>PROJECTS</h2>
                <div className="projects">
                    {projects.map((project, index) => (
                        <ProjectsBuilder key={index} {...project} />
                    ))}
                </div>
                
                <h2>EXPERIENCE</h2>
                <div className="experience">
                    {experience.map((exp, index) => (
                        <ExperienceBuilder key={index} {...exp} />
                    ))}
                </div>
                <h2>SKILLS</h2>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <SkillsBuilder key={index} {...skill} />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default App;
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

    const [projects, setProjects] = useState({
        title: 'Minecraft',
        subtitle: 'Mod Creator',
        startDate: '2016-05-27',
        endDate: '2016-09-11',
        description: 'I developed cool lucky block mods for Youtubers to use!'
    });

    const [experience, setExperience] = useState({
        title: 'Software Engineer',
        company: 'Mojang',
        startDate: '2011-04-22',
        endDate: '2015-08-14',
        description: 'Design, architect, develop, test, and deploy software solutions that meet customer requirements. Work in teams to produce high-quality software products. Create software architectures, designs, and specifications.'
    });

    const [skills, setSkills] = useState({
        name: 'React JS',
        category: 'Javascript Library',
        proficiency: 'Beginner',
        yearsOfExperience: '2',
        description: 'Library used to Build FrontEnd Applications with Ease. It lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'
    });

    function handleInputChange(e, setState) {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container">
            <div className="input">
                <General general={general} handleInputChange={(e) => handleInputChange(e, setGeneral)} />
                <Projects projects={projects} handleInputChange={(e) => handleInputChange(e, setProjects)} />
                <Experience experience={experience} handleInputChange={(e) => handleInputChange(e, setExperience)} />
                <Skills skills={skills} handleInputChange={(e) => handleInputChange(e, setSkills)} />
            </div>
            <div className="resume">
                <GeneralBuilder {...general} />
                <ProjectsBuilder {...projects} />
                <ExperienceBuilder {...experience} />
                <SkillsBuilder {...skills} />
            </div>
        </div>
    );
}

export default App;
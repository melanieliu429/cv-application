import React, { Component } from 'react'
import General, {GeneralBuilder} from './components/General';
import Projects, {ProjectsBuilder} from './components/Projects';
import Experience, {ExperienceBuilder} from  './components/Experience';
import Skills, {SkillsBuilder} from './components/Skills';
// import Education from './components/Education'
// import Experience from './components/Experience';

class App extends Component {

    render() {
        return (
            <div>
              <div>
                <General />
                <Projects />
                <Experience />
                <Skills />
                {/* <Education />
                <Experience /> */}
            </div>
            <div>
                <GeneralBuilder />
                <ProjectsBuilder />
                <ExperienceBuilder />
                <SkillsBuilder />
            </div>
            </div>
        )
    }
}

export default App;
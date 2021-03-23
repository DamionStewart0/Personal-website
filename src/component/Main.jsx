import React from 'react';
import {  Switch, Route} from 'react-router-dom';
import About from './screens/about/About';
import Projects from './screens/project/Projects';
import Contact from './screens/contact/Contact';
import Resume from './screens/resume/Resume';
import LandingPage from './screens/landingpage/LandingPage';

export default function Main() {

    const handleSubmit = () => {};
    

    return (
        <Switch>
            <Route exact path='/'>
                <LandingPage />
            </Route>

            <Route path='/resume'>
                <Resume />
            </Route>

            <Route path='/about-me'>
                <About />
            </Route>

            <Route path='/projects'>
                <Projects />
            </Route>

            <Route path='/contact'>
                <Contact />
            </Route>

            
        </Switch>
    )
}

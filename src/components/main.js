import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';




const Main = () => (
    <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />


    </Switch>
)

export default Main;
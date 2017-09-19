import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home';
import TestOptions from './components/TestOptions';
import JEEMain from './components/test/JEEMain';
import JEEAdvanced from './components/test/JEEAdvanced';
import NEET from './components/test/NEET';
import Class from './components/Class';
import TestStart from './components/test/TestStart';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } { ...props }/>
      <Route exact path="/home" component={ HomePage } { ...props }/>
      <Route exact path="/test" component={ TestOptions } { ...props }/>
      <Route exact path="/test/jee-main" component={ JEEMain } { ...props }/>
      <Route exact path="/test/jee-advanced" component={ JEEAdvanced } { ...props }/>
      <Route exact path="/test/neet" component={ NEET } { ...props }/>
      <Route exact path="/test/jee-main/class" component={ Class } { ...props } examType='jee-main'/>
      <Route exact path="/test/jee-main/class/:standard" component={ TestStart } { ...props } />
      <Route exact path="/test/jee-advanced/class" component={ Class } { ...props } examType='jee-advanced' />
      <Route exact path="/test/jee-advanced/class/:standard" component={ TestStart } { ...props }/>
      <Route exact path="/test/neet/class" component={ Class } { ...props } examType='neet' />
      <Route exact path="/test/neet/class/:standard" component={ TestStart } { ...props }/>
    </Switch>
  )
}


export default App;
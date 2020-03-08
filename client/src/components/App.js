import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'

const Landing = () => <h2>Landing</h2>
const Surveys = () => <h2>Surveys</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


const App = () => {
  return (<div>
    <BrowserRouter>
    <div className="container">
      <Header/>
      <Route exact path="/"></Route>
      <Route exact path="/surveys" component={Surveys}></Route>
      <Route path="/surveys/new" component={SurveyNew}></Route>
    </div>
    </BrowserRouter>
  </div>)
}

export default App

import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = '18'
  const apiKey = process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />

              <Routes>
              <Route exact path='/'   element={<News setProgress = {setProgress}  apiKey={apiKey}   key="1general" pageSize={pageSize} Country = 'in' category='general'/>}/>
              <Route exact path='/business' element={<News setProgress = {setProgress}  apiKey={apiKey}   key="business"  pageSize={pageSize} Country = 'in' category='business'/>}/>
              <Route exact path='/entertainment'  element={<News setProgress = {setProgress}  apiKey={apiKey}   key="entertainment"  pageSize={pageSize} Country = 'in' category='entertainment'/>}/>
              <Route exact path='/general'   element={<News setProgress = {setProgress}  apiKey={apiKey}   key="general" pageSize={pageSize} Country = 'in' category='general'/>}/>
              <Route exact path='/health'  element={<News setProgress = {setProgress}  apiKey={apiKey}   key="health" pageSize={pageSize} Country = 'in' category='health'/>}/>
              <Route exact path='/science'   element={<News setProgress = {setProgress}  apiKey={apiKey}   key="science" pageSize={pageSize} Country = 'in' category='science'/>}/>
              <Route exact path='/sports'  element={<News setProgress = {setProgress}  apiKey={apiKey}   key="sports" pageSize={pageSize} Country = 'in' category='sports'/>}/>
              <Route exact path='/technology'  element={<News setProgress = {setProgress}  apiKey={apiKey}   key="technology" pageSize={pageSize} Country = 'in' category='technology'/>}/>
              </Routes>
        </Router>
      </div>
    )
}

export default App
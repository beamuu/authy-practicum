import React from 'react';
import './App.css';
import Main from './components/Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoWebsiteBanner from './components/DemoWebsiteBanner.js';

document.title = 'Card App'


function App() {
  
  return (
    <div className="App">

      <DemoWebsiteBanner />
      <Main />
    </div>
  );
}

export default App;
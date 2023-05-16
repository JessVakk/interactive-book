
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/sida1' element= { <Page1 />} />
          <Route path='/sida2' element= { <Page2 />} />
          <Route path='/sida3' element= { <Page3 />} />
          <Route path='/sida4' element= { <Page4 />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

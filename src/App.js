
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page3A from './views/path2/Page3A';
import Page4 from './views/Page4';
import Page5 from './views/Page5';
import Page5A from './views/path2/Page5A';
import Page6 from './views/Page6';
import Page6A from './views/path2/Page6A';
import Page7 from './views/Page7';
import Page7A from './views/path2/Page7A';
import Page8 from './views/Page8';
import Page8A from './views/path2/Page8A';
import Page9 from './views/Page9';
import Page10 from './views/Page10';
import Page11 from './views/Page11';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/sida1' element= { <Page1 />} />
          <Route path='/sida2' element= { <Page2 />} />
          <Route path='/sida3' element= { <Page3 />} />
          <Route path='/sida3a' element= { <Page3A />} />
          <Route path='/sida4' element= { <Page4 />} />
          <Route path='/sida5' element= { <Page5 />} />
          <Route path='/sida5a' element= { <Page5A />} />
          <Route path='/sida6' element= { <Page6 />} />
          <Route path='/sida6a' element= { <Page6A />} />
          <Route path='/sida7' element= { <Page7 />} />
          <Route path='/sida7a' element= { <Page7A />} />
          <Route path='/sida8' element= { <Page8 />} />
          <Route path='/sida8a' element= { <Page8A />} />
          <Route path='/sida9' element= { <Page9 />} />
          <Route path='/sida10' element= { <Page10 />} />
          <Route path='/sida11' element= { <Page11 />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;

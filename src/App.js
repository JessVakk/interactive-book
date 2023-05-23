
import { Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import './App.css';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page3A from './views/path3/Page3A';
import Page4 from './views/Page4';
import Page4A from './views/path3/Page4A';
import PageC5 from './views/path3/PageC5';
import Page5 from './views/Page5';
import Page5A from './views/path2/Page5A';
import Page6 from './views/Page6';
import Page6A from './views/path2/Page6A';
import Page6B from './views/path2/Page6B';
import Page7 from './views/Page7';
import Page7A from './views/path2/Page7A';
import Page7B from './views/path2/Page7B';
import Page8 from './views/Page8';
import Page8A from './views/path2/Page8A';
import Page8B from './views/path2/Page8B';
import Page9 from './views/Page9';
import Page9A from './views/path2/Page9A';
import Page10 from './views/Page10';
import Page10A from './views/path2/Page10A';
import Page10B from './views/path2/Page10B';
import Page11a from './views/path2/Page11a';
import Page11 from './views/Page11';
import PageC6 from './views/path3/PageC6';
import PageC7 from './views/path3/PageC7';
import PageC8 from './views/path3/PageC8';
import PageC5a from './views/path3/PageC5a';




function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <AnimatePresence mode="wait" inital={false}>
          <Routes location={location} key={location.pathname}>
            <Route path='/sida1' element= { <Page1 />} />
            <Route path='/sida2' element= { <Page2 />} />
            <Route path='/sida3' element= { <Page3 />} />
            <Route path='/sida3a' element= { <Page3A />} />
            <Route path='/sida4' element= { <Page4 />} />
            <Route path='/sida4a' element= { <Page4A />} />
            <Route path='/sida5' element= { <Page5 />} />
            <Route path='/sidaC5' element= { <PageC5/>} />
            <Route path='/sidaC5a' element= { <PageC5a/>} />
            <Route path='/sidaC6' element= { <PageC6/>} />
            <Route path='/sidaC7' element= { <PageC7/>} />
            <Route path='/sidaC8' element= { <PageC8/>} />
            <Route path='/sida5a' element= { <Page5A />} />
            <Route path='/sida6' element= { <Page6 />} />
            <Route path='/sida6a' element= { <Page6A />} />
            <Route path='/sida6b' element= { <Page6B />} />
            <Route path='/sida7' element= { <Page7 />} />
            <Route path='/sida7a' element= { <Page7A />} />
            <Route path='/sida7b' element= { <Page7B/>} />
            <Route path='/sida8' element= { <Page8 />} />
            <Route path='/sida8a' element= { <Page8A />} />
            <Route path='/sida8b' element= { <Page8B/>} />
            <Route path='/sida9' element= { <Page9 />} />
            <Route path='/sida9a' element= { <Page9A />} />
            <Route path='/sida10' element= { <Page10 />} />
            <Route path='/sida10a' element= { <Page10A />} />
            <Route path='/sida10b' element= { <Page10B />} />
            <Route path='/sida11' element= { <Page11 />} />
            <Route path='/sida11a' element= { <Page11a />} />
          </Routes>
        </AnimatePresence>
      </header>
    </div>
  );
}

export default App;

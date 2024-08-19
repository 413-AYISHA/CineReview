import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.css'
import './App.css'


import Viewspage from './components/views';
import HomePage from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<HomePage />}  />
            <Route path='/views' element={<Viewspage/>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
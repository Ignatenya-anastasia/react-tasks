import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index1 from './pages/index1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/1' element={<Index1></Index1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

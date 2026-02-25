import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Index3 from './pages/index3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/1' element={<Index1></Index1>}></Route>
        <Route path='/2' element={<Index2></Index2>}></Route>
        {/* <Route path='/3' element={<Index3></Index3>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

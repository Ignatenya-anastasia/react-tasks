import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Index3 from './pages/index3';
import Index4 from './pages/index4';
import Index5 from './pages/index5';
import Index6 from './pages/index6';
import GLOBAL from './context';
import { useState } from 'react';

function App() {
  // const obj = {id:1, name: 'Pit', age: 20}

  // const [lang, setLang] = useState('ru');

  // const obj = {
  //   temperature: 10,
  //   speed: 5,
  //   sunny: 10
  // }

  const [style, setStyle] = useState(true);

  return (
    <div className="App">
      <GLOBAL.Provider value={{style: style, setStyle: setStyle}}>
      <Routes>
        <Route path='/1' element={<Index1></Index1>}></Route>
        <Route path='/2' element={<Index2></Index2>}></Route>
        <Route path='/3' element={<Index3></Index3>}></Route>
        <Route path='/4' element={<Index4></Index4>}></Route>
        <Route path='/5' element={<Index5></Index5>}></Route>
        <Route path='/6' element={<Index6></Index6>}></Route>
      </Routes>
      </GLOBAL.Provider>
    </div>
  );
}

export default App;

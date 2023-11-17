import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import Login from './components/Login';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='view' element={<View/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='delete' element={<Delete/>}/>
        <Route path='' element={<Login/>}/>
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

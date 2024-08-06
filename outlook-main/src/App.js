import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Password from './Component/Password';

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Login/> */}
      <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/password" Component={Password}/>
      </Routes>
    </div>

    </BrowserRouter>





   
      
  );
  
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';


const App = () => {
  return (<>
      
    <Router>
   
      <div>
        <Navbar/>
          <Routes>
            
          <Route path="/login" element={<Login/>} />
          <Route  path="/signup" element={<Signup/>} />
        
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;


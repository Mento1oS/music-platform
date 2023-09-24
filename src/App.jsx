import './App.css';
import AppRoutes from './pages/Routes';
import { useState } from 'react';
function App() {
  const [isToPass, setIsToPass] = useState(false);
  const [user, setUser] = useState({
    mail: '',
    password: '',
    password__double: ''});
  return (
    <div className="App">
      <div className="wrapper">
      <div className="container">
        <AppRoutes user={user} isToPass={isToPass} setIsToPass={setIsToPass} setUser={setUser}/>
        <footer className="footer"></footer>
      </div>
    </div>
    </div>
  );
}

export default App;

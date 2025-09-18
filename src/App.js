// import logo from './logo.svg';
import './App.css';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import SignUp from './react_routing/SignUp';
// import SignIn from './react_routing/SignIn';
// import Dashboard from './react_routing/Dashboard';
import Counter from './react-redux/Counter.js';
import UserComponent from './redux2/fetch';
function App() {
  return (
    <div className="App">
      <UserComponent/>
      <Counter/>
      {/* <nav>
        <link to="/SignUp">SignUp</link>

      </nav> */}
     
  {/* <Routes>
    <Route path="/" element={<SignIn/>} />
    <Route path="/SignUp" element={< SignUp/>} />
    <Route path="/Dashboard" element={< Dashboard/>} />
  </Routes>
     */}
     
    </div>
  );
}

export default App;

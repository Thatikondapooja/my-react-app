// import logo from './logo.svg';
import './App.css';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import SignUp from './react_routing/SignUp';
// import SignIn from './react_routing/SignIn';
// import Dashboard from './react_routing/Dashboard';
// import Counter from './react-redux/Counter.js';
// import UserComponent from './redux2/UserComponent.js';
// import FecthingPosts from './redux-fetch/FecthPosts.js'
// import Ex from './redux-fetch/ex.js'
// import FetchUsers from './redux-fetch/FetchUsers';
// import Components from './reactComponenets/component'
// import Axios from './redux-fetch/Axios';
import Navbar from './reactComponenets/Navbar';
import NewHome from './reactComponenets/NewHome';
// import BlogsList from './reactComponenets/BlogList'
function App() {
  return (
    <div className="content">
      {/* <FecthingPosts/> */}

      {/* <Ex/> */}
      {/* <Axios/>
      <Components/> */}
      <Navbar/>
      <NewHome/>
      {/* <BlogsList/> */}
      {/* <FetchUsers/> */}
      {/* <UserComponent/> */}
      {/* <Counter/> */}
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

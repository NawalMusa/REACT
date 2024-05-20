import './App.css';
//import Navbar from './Components/Nav';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
     <Router>
        <div className="App">
       <Navbar/>
       <div className='content'>
        <Switch>

        <Route exact path="/">
          <Home/>
       </Route>
        

        <Route path="/Create">
          <Create/>
        </Route>

        <Route  path="/Blog-details/:id">
        <BlogDetails/>
        </Route>

        </Switch>
       </div>
       </div>
     </Router>
       
    
   
  );
}

export default App;

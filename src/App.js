import './App.css'
import {Link} from 'react-router-dom';

import {Route,Routes} from 'react-router-dom';
import Movie from './com/Movie'
import Homeall from './Homeall'
import Exemple from './com/Exemple';
function App() {
  
  
  return (
    
    <div className="App">
     <Link to="/home"> <h1>Home</h1></Link>
     <Routes>
       <Route path='/home' element={<Homeall/>}/>
       <Route path='/Movie/:title' element={<Exemple/>}/>

     </Routes>
    </div>
    
  );
}


export default App;


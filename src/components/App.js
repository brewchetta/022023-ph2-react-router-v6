import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HotDrinksContainer from './HotDrinksIndex/HotDrinksContainer'
import HotDrinkPage from './HotDrinkShow/HotDrinkPage'
import About from './About/About'
import NoMatch from './NoMatch'

function App() {
  
  return (
    <div className="App">

      <Navbar />

      <h1>My Fancy Project Ok Yay</h1>

      <Routes> {/* <---- this is our container for all of our routes */}

        <Route path='about' element={ <About /> } />
      
        <Route path="hot-drinks" element={ <HotDrinksContainer /> } />

        {/* the '/:id' is a param which is similar to a function parameter for arguments */}
        <Route path="hot-drinks/:id" element={ <HotDrinkPage /> } />

        {/* the '*' means this will apply to anything that doesn't match, great for 404 pages */}
        <Route path="*" element={ <NoMatch /> } />

      </Routes>

    </div>
  );
}

export default App;

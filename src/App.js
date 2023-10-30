import Home from './home';
import Learn from './learn';
import Quiz from './quiz';
import Feed from './feed';
import './nav.css';
import {Routes,Route,Link} from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function App() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div className="App">
      <header className="App-header">
      <nav ref={navRef}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/learn">Learn</Link>
          </li>

          <li>
            <Link to="/quiz">Quiz</Link>
          </li>

          <li>
            <Link to="/feed">Feedback</Link>
          </li>
         
        </ul>
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </nav>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      </header>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/learn' element={<Learn/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path='/feed' element={<Feed/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Home from './Home.jsx'
function App() {
 
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import User from './Component/User';
import Navbar from './Component/Admin/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Home from './Component/HomeSection/Home';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;

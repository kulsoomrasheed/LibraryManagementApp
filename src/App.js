import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import MainRoutes from './pages/MainRoutes';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
<Nav/>
    <MainRoutes/>
    </div>
  );
}

export default App;

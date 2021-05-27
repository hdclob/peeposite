
import './App.css';
import Home from './pages/Home/Home';
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <>
     <Home />
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home/Home"
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </>
  );
}

export default App;

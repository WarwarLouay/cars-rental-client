import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import BookingCar from './Pages/BookingCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element = { <Home /> } />
        <Route path='/login' element = { <Login /> } />
        <Route path='/register' element = { <Register /> } />
        <Route path='/booking' element = { <BookingCar /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

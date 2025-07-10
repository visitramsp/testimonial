import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';



const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  console.log(isLoggedIn, "isLoggedIn");


  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children
}

const PublicRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
    return <Navigate to="/home" replace />;
  }
  return children
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Login />

          </PublicRoute>
        } />
        <Route path='/abc' element={<Home />} />
        <Route path='/home' element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path='/about' element={
          <ProtectedRoute>

            <About />
          </ProtectedRoute>
        } />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

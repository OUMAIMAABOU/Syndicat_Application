// import './App.css';
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Appartement from './Page/Admin/Appartement';
import Client from './Page/Admin/Client';
import Paiment from './Page/Admin/Paiment';
import LoginPage from './Page/Auth/Login' ;

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Appartement />} path='/appartement'/>
      <Route element={<Client />} path='/client'/>
      <Route element={<Paiment />} path='/paiment'/>
      <Route element={<LoginPage />} path='/'/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

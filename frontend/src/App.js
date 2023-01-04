// import './App.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Appartement from './Page/Admin/Appartement';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Appartement />} path='/'/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

// import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductRout from "./Router/ProductRouter";
import Appartement from "./Page/Admin/Appartement";
import Client from "./Page/Admin/Client";
import Paiment from "./Page/Admin/Paiment";
import LoginPage from "./Page/Auth/Login";
import Facteur from "./Component/Admin/Payement/Facteur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductRout />}>
          <Route element={<Appartement />} path="/appartement" />
          <Route element={<Client />} path="/client" />
          <Route element={<Paiment />} path="/paiment" />
          <Route element={<Facteur/>} path="/fact"/>
        </Route>

        <Route element={<LoginPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

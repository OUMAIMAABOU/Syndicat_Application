import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductRout from "./Router/ProductRouter";
import Appartement from "./Page/Admin/Appartement";
import Client from "./Page/Admin/Client";
import Paiment from "./Page/Admin/Paiment";
import LoginPage from "./Page/Auth/Login";
import Facteur from "./Component/Admin/Payement/Facteur";
import { UserContext } from "./Context/UseContext";
// import MyComponent from "./Component/Login/table";

function App() {
  const [value,setValue]=useState("")
  return (
    <BrowserRouter>
      <UserContext.Provider value={{value,setValue}}>
        <Routes>
          <Route element={<ProductRout />}>
            <Route element={<Appartement />} path="/appartement" />
            <Route element={<Client />} path="/client" />
            <Route element={<Paiment />} path="/paiment" />
            <Route element={<Facteur />} path="/fact" />
          </Route>

          <Route element={<LoginPage />} path="/" />
          {/* <Route element={<MyComponent />} path="/tab" /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

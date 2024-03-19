import Login from "./Page/Login";
import Signup from "./Page/Signup";
import LandingPage from "./Page/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import PrivateRoutes from "./Components.jsx/PrivateRoutes";
import Card from "./Page/Card";
import UserNotFound from "./Page/UserNotFound";
import MyForm from "./Page/Form/MyForm";
import Edit from "./Page/Form/Edit";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile/:id" element={<Card />} />
      <Route path="/not-available" element={<UserNotFound />} />
      
      
      <Route path="/user" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<HomePage />}/>
        <Route path="edit" element={<Edit />} />
      </Route>

      <Route path="/admin" element={<PrivateRoutes />}>
        <Route path="addform" element={<MyForm />} />
      </Route>
      
      </Routes>
    </BrowserRouter>
    // <>
    //   <Signup/>
    //   <Login/>
    // </>
  );
}

export default App;

import Navigation from "./Components/Common/Navigation.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Home/Index.jsx";
import Footer from "./Components/Common/footer.jsx";
import SingIn from "./Pages/Connexion/SingIn.jsx";
import User from "./Pages/Users/User.jsx";
import ProtectedUser from "./Pages/Users/Userprotected/ProtectedUser.jsx";
import NotFound from "./Pages/404/NotFound.jsx";





function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route
            path="/user"
            element={
              <ProtectedUser>
                <User />
              </ProtectedUser>
            }
          />
        <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;

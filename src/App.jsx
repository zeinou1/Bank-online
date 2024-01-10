import Navigation from "./Components/Common/Navigation.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Pages/Home/Index.jsx";
import Footer from "./Components/Common/footer.jsx";
import SingIn from "./Pages/Connexion/SingIn.jsx";
import User from "./Pages/Users/User.jsx";
import UserTest from "./Pages/Users/user1.jsx";


function App() {
  

  return (
    <>
        <BrowserRouter>
            <Navigation/>
            <Routes>
              <Route path='/ff' element={<Index/>} />
                <Route path='/SingIn' element={<SingIn/>} />
                <Route path="/gf" element={<User/>} />
                <Route path="/" element={<UserTest/>} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App

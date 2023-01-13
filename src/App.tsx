import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "pages/SignUp/Signup";
import Dashboard from "pages/Home/Home";
import MyVacancies from "pages/MyVacancies/MyVacancies";
import Opportunities from "pages/Opportunities/Opportunities";
import Posts from "pages/Posts/Posts";
import Contact from "pages/Contact/Contact";
import MyProfile from "pages/MyProfile/MyProfile";
import CandidateMasterPage from "components/CandidateMasterPage/CandidateMasterPage";
import AccessMasterPage from "components/AccessMasterPage/AccessMasterPage";
import ResetPassword from "pages/ResetPassword/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/access" element={<AccessMasterPage />}>
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<ResetPassword/>} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="/" element={<CandidateMasterPage />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="myvacancies" element={<MyVacancies />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Route>
    </Routes>
  );
}

export default App;

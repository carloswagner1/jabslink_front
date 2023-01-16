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
import AccessMasterPage from "components/AccessMasterPage/AccessMasterPage";
import CandidateMasterPage from "components/CandidateMasterPage/CandidateMasterPage";

import ResetPassword from "pages/ResetPassword/ResetPassword";
import ChangePassword from "pages/ChangePassword/ChangePassword";
import CompanyMasterPage from "components/CompanyMasterPage/CompanyMasterPage";
import NewProcessForm from "components/NewProcessForm/NewProcessForm";
import NewProcess from "pages/NewProcess/NewProcess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccessMasterPage />}>
        <Route path="/" element={<Login />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="/candidate" element={<CandidateMasterPage />}>
        <Route path="" element={<Dashboard />} />
        <Route path="myvacancies" element={<MyVacancies />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="password" element={<ChangePassword />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Route>

      <Route path="/company" element={<CompanyMasterPage />}>
        
        <Route path="newprocess" element={<NewProcess />} />
        <Route path="password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}

export default App;

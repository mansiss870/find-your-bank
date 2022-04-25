import { Route, Routes, Navigate } from "react-router-dom";
import AllBanks from "./Pages/AllBanks";
import BankDetails from "./Pages/BankDetails";
import Favorites from "./Pages/Favorites";
import NotFound from "./Components/NotFound";
import { HOC } from "./HigherOrderComponent/HOC";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/all-banks" />}></Route>
    <Route path="/all-banks" element={<HOC component={<AllBanks />}/>}></Route>
    <Route path="/favorites" element={<HOC component={<Favorites />}/>}></Route>
    <Route path="/bank-details/:ifsc_code" element={<BankDetails />}></Route>
    <Route path = "*" element={<NotFound />}></Route>
  </Routes>
);

export default AppRoutes;
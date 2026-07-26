import React, { useContext } from "react";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./Components/Navbar";
import { SkyMartContext } from "./Context/ContextProvider";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

const App = () => {
  const { session, showCart } = useContext(SkyMartContext);

  return (
    <div className="bg-black">
      {session && <Navbar />}
      <AppRoutes />
      {session && <Footer />}
      {showCart && <Cart />}
    </div>
  );
};

export default App;

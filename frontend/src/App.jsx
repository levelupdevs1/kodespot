import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const hideLayout = ["/signup", "/signin", "/login"].some((p) =>
    pathname.startsWith(p)
  );

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;

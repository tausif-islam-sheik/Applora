import { Outlet, useNavigation } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import logo from "./assets/logo.png"

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <div>
        {/* Global Loader */}
        {navigation.state === "loading" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
              {/* Spinning Logo */}
              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 animate-spin-slow"
              />

              {/* Optional Loading Text */}
              <p className="mt-4 text-black text-lg font-medium">Loading...</p>
            </div>
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Root;

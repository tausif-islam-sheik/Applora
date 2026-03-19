import { Outlet, useNavigation } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import logo from "./assets/logo.png";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <div>
        {/* Global Loader */}
        {navigation.state === "loading" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              {/* Spinner */}
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
              </div>

              {/* Logo inside (optional premium touch) */}
              <img src={logo} alt="Logo" className="w-8 h-8 pt-4 absolute" />

              {/* Text */}
              <p className="mt-6 text-gray-700 text-sm tracking-wide">
                Loading content...
              </p>
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

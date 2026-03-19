import notFoundPage from "../assets/error-404.png";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <img
        src={notFoundPage}
        alt="404 illustration"
        className="w-full max-w-md mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Oops, page not found!
      </h1>

      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 rounded-md font-medium text-white 
             bg-gradient-to-r from-purple-500 to-indigo-500 
             hover:from-purple-600 hover:to-indigo-600 
             transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
      >
        Go Back!
      </button>
    </div>
  );
};

export default PageNotFound;

import { useLoaderData, Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import reviewIcon from "./assets/review-icon.png";

const AppDetails = () => {
  const app = useLoaderData();

  if (!app) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="card bg-base-100 shadow p-8 text-center">
          <h1 className="text-2xl font-bold text-error">App Not Found</h1>
          <Link to="/" className="btn btn-primary mt-4">
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  const {
    title,
    image,
    downloads,
    ratingAvg,
    ratings,
    reviews,
    size,
    description,
    companyName,
  } = app;

  // Fake rating distribution (you can replace with real data)
  const ratingData = ratings.map((rating) => rating);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Top Section */}
      <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row gap-6">
        {/* App Image */}
        <img
          src={image}
          alt={title}
          className="w-44 md:w-60 md:h-60 object-cover rounded-xl"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-lg font-semibold text-purple-600">
              {companyName}
            </span>
          </p>
          <hr className="text-gray-300 mt-4" />
          {/* Stats */}
          <div className="flex gap-8 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-500">Downloads</p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(downloads)}
              </p>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.69h4.173c.969 
                   0 1.371 1.24.588 1.81l-3.378 
                   2.455a1 1 0 00-.364 1.118l1.287 
                   3.969c.3.921-.755 1.688-1.54 
                   1.118l-3.379-2.455a1 1 0 
                   00-1.175 0l-3.379 
                   2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.969a1 1 
                   0 00-.364-1.118L2.98 
                   9.395c-.783-.57-.38-1.81.588-1.81h4.173a1 
                   1 0 00.95-.69l1.286-3.968z"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-500">
                Average Ratings
              </p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(ratingAvg)}
              </p>
            </div>

            <div>
              <img className="w-10 h-10" src={reviewIcon} alt="" />
              <p className="text-sm font-semibold text-gray-500">
                Total Reviews
              </p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(reviews)}
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="btn bg-green-600 mt-4 text-white">
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratingData} layout="vertical" margin={{ left: 20 }}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar dataKey="count" fill="#f97316" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

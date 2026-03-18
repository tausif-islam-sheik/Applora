import { Link } from "react-router";

const AppCard = ({ appData }) => {
  const { id, image, title, downloads, ratingAvg } = appData;
  return (
    <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100 shadow-md rounded-xl cursor-pointer">
        <div className="p-3">
          <img className="rounded-lg h-52 w-full object-cover" src={image} />
        </div>

        <div className="px-4 pb-4">
          <h2 className="text-sm font-semibold text-gray-800">{title}</h2>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1 text-green-600 text-xs font-medium p-2 rounded-lg bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(downloads)}
            </div>

            <div className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded-md text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

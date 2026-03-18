import bannerImg from "../assets/hero.png";
import googlePlayIcon from "../assets/google-play.png";
import appStoreIcon from "../assets/app-store.png";

const Banner = () => {
  return (
    <section className="bg-gray-100 pt-16 pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
          We Build
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent pr-4">
            Productive
          </span>
          Apps
        </h1>

        <p className="mt-6 text-gray-500 max-w-4xl mx-auto md:text-lg leading-relaxed">
          At APPLORA, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button className="flex items-center gap-2 px-6 py-3 border rounded-lg border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer">
            <img src={googlePlayIcon} className="w-5" alt="Google Play" />
            <span className="font-medium">Google Play</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 border rounded-lg border-gray-300 shadow-sm hover:shadow-md transition cursor-pointer">
            <img src={appStoreIcon} className="w-5" alt="App Store" />
            <span className="font-medium">App Store</span>
          </button>
        </div>

        <div className="mt-20 flex justify-center">
          <img
            src={bannerImg}
            className="w-[600px] md:w-[800px]"
            alt="Banner"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-white/20 rounded-lg p-8">
            {/* Item 1 */}
            <div className="space-y-3">
              <p className="text-sm text-white/80">Total Downloads</p>
              <h2 className="text-5xl font-extrabold">29.6M</h2>
              <p className="text-sm text-white/70">21% More Than Last Month</p>
            </div>

            {/* Item 2 */}
            <div className="space-y-3">
              <p className="text-sm text-white/80">Total Reviews</p>
              <h2 className="text-5xl font-extrabold">906K</h2>
              <p className="text-sm text-white/70">46% More Than Last Month</p>
            </div>

            {/* Item 3 */}
            <div className="space-y-3">
              <p className="text-sm text-white/80">Active Apps</p>
              <h2 className="text-5xl font-extrabold">132+</h2>
              <p className="text-sm text-white/70">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

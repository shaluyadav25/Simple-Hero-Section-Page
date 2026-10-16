import { TvMinimalPlay } from "lucide-react";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <div className="min-h-screen bg-white px-6 md:px-12">
        <div className="flex items-center justify-between py-6">
          <TvMinimalPlay size={35} className="text-blue-600" />

          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>

          <button className="rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Hero Section */}
        <section className="flex min-h-[75vh] flex-col items-center justify-center text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
            Trusted by Businesses Worldwide
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Trusted by
            <br />
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              100,000+ Businesses
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base text-gray-500 md:text-lg">
            We help companies grow with modern digital solutions
            and powerful technology.
          </p>

          {/* Stats */}
          <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
                100K+
              </h2>
              <p className="mt-2 text-sm text-gray-500">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
                500+
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Projects Completed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
                50+
              </h2>
              <p className="mt-2 text-sm text-gray-500">Team Members</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
                4.9
              </h2>
              <p className="mt-2 text-sm text-gray-500">Client Rating</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
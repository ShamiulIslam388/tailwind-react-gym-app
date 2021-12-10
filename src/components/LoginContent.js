import { useNavigate } from "react-router-dom";
import ManagementCard from "../utilities/ManagementCard";
import { aboutpageData } from "../Data.js";
const LoginContent = () => {
  const navigate = useNavigate();
  return (
    <div className="container md:py-12 flex flex-col py-8 md:flex-row items-start justify-between gap-10 md:gap-20">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Login to account
        </h1>
        <form className="flex flex-col w-full">
          <div className="flex flex-col mb-2">
            <label className="text-gray-600 mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="focus:outline-none border-2 border-gray-300 w-full py-1 px-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-gray-600 mb-1">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              className="focus:outline-none border-2 border-gray-300 w-full py-1 px-2 rounded-lg"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-2 w-24 text-center rounded-lg"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-2 w-40 text-center rounded-lg"
              onClick={() => navigate("/register")}
            >
              Register New User
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-6/12">
        <h2 className="text-3xl mb-4 font-semibold">Shift Management</h2>
        {aboutpageData.map((data, index) => (
          <ManagementCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default LoginContent;

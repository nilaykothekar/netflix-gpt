import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import { NETFLIX_BG } from "../utils/constants";

const Login = () => {
  return (
    <Fragment>
      <Header />
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NETFLIX_BG})` }}
      >
        <form className="w-2/5 bg-black opacity-85 p-8 rounded-lg">
          <h1 className="text-white text-3xl my-4 font-bold">Sign In</h1>
          <input
            type="text"
            className="w-full p-4 my-4 rounded bg-gray-900 text-white border border-gray-400"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full p-4 my-4 rounded bg-gray-900 text-white border border-gray-400"
            placeholder="Password"
          />
          <button className="w-full p-2 my-4 text-white bg-red-600 hover:bg-red-700 duration-100 rounded-lg cursor-pointer font-semibold">
            Sign In
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;

import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg')",
      }}
    >
      {/* Black Shade Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Transparent Header */}
      <Header />

      {/* Centered Login Form */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <form className="bg-black/70 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h2>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
            />
          )}
          {!isSignIn && (
            <input
              type="tel"
              placeholder="Enter your Mobile"
              className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="text-white my-4">
            {isSignIn ? 'New to Netflix?' : 'Already a user?'}{' '}
            <button
              onClick={toggleSignIn}
              type="button"
              className="underline font-semibold cursor-pointer"
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useRef, useState } from 'react';
import Header from '../components/Header';
import { BACKGROUND } from '../utils/constant';
import { Validate } from '../utils/validate';

const Login = () => {
  // state variables
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);

  // ref variables
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobile = useRef(null);

  // handlers
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const message = Validate(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      mobile?.current?.value
    );
    setError(message);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BACKGROUND})`,
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
              ref={name}
            />
          )}
          {!isSignIn && (
            <input
              type="tel"
              placeholder="Enter your Mobile"
              className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
              ref={mobile}
            />
          )}
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
            ref={email}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 mb-8 rounded-lg bg-gray-800/80 text-white focus:outline-none"
            ref={password}
          />
          {error && <p className="mb-4 text-red-600 text-sm">{error}</p>}
          <button
            onClick={handleSignIn}
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

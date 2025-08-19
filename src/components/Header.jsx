import { LOGO } from '../utils/constant';

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-start items-center py-4 px-8 bg-transparent z-10">
      <img src={LOGO} alt="logo" className="w-40" />
    </nav>
  );
};

export default Header;

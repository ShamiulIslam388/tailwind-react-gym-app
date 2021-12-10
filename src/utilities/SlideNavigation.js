import { Link } from "react-router-dom";

const SlideNavigation = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`md:hidden bg-white flex flex-1 flex-col justify-end items-center py-6 absolute z-50 top-18
      border-b border-t-2 transition-all duration-3000 ${
        !isOpen
          ? "transition-all duration-3000 right-full"
          : "transition-all duration-3000 w-full"
      }`}
    >
      <Link to="/" className="mb-4" onClick={() => setIsOpen(false)}>
        Home
      </Link>
      <Link to="/about" className="mb-4" onClick={() => setIsOpen(false)}>
        AboutProject
      </Link>
      <Link to="/gallery" className="mb-4" onClick={() => setIsOpen(false)}>
        Gallery
      </Link>
      <Link to="/register" className="mb-4" onClick={() => setIsOpen(false)}>
        Register
      </Link>
      <Link to="/contact" className="mb-4" onClick={() => setIsOpen(false)}>
        Contact
      </Link>
      <Link to="/login" className="mb-4" onClick={() => setIsOpen(false)}>
        Login
      </Link>
    </nav>
  );
};

export default SlideNavigation;

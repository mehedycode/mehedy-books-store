import { Link, NavLink } from "react-router-dom";
import '../../components/app.css'

const NavBar = () => {

  

  return (
    <div className="navbar bg-base-100 py-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/readBook'>Listed Books</Link></li>
           <li><Link to='/dashboard'>Pages to Read</Link></li>
          </ul>
        </div>
        <a className="text-3xl font-bold cursor-pointer">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1" id="navlink">

      <li className="flex items-center gap-8 text-lg">
            <NavLink to='/'            className='hover:text-#23BE0A transition-colors duration-700'>Home</NavLink>
            <NavLink to='/readsBook' className='hover:text-#23BE0A transition-colors duration-700'>Listed Books</NavLink>
            <NavLink to='/dashboard'   className='hover:text-#23BE0A transition-colors duration-700'>Pages to Read</NavLink>
      </li>

        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn text-white  bg-[#23BE0A]">Sign In</a>
        <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";
import logo from '../assets/images/file.png'

const Navbar = () => {
    return (
        <div className="bg-pink-200">
        <div className="navbar max-w-7xl mx-auto py-3 md:px-6 px-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[15] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#561476]'}>Home</NavLink>
                <NavLink to='/allProducts' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#561476]'}>All Products</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#561476]'}>About</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#561476]'}>Contact</NavLink>
              </ul>
            </div>
            <div className="flex items-center">
              <img className="md:w-16 md:h-16 w-10 h-10" src={logo} alt="" />
              <a className="lg:text-3xl md:text-2xl ml-1 font-bold bg-gradient-to-r from-[#9919c0] to-[#ff338f] text-transparent bg-clip-text">Trendy Fashion</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="flex space-x-6 items-center">
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg border border-[#c019a4]  ' : 'font-semibold text-[#561476]'}>Home</NavLink>
                <NavLink to='/allProducts' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg border border-[#c019a4]  ' : 'font-semibold text-[#561476]'}>All Products</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg border border-[#c019a4]  ' : 'font-semibold text-[#561476]'}>About</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#991072] px-4 py-2 font-bold rounded-lg border border-[#c019a4]  ' : 'font-semibold text-[#561476]'}>Contact</NavLink>
              </div>
            </ul>
          </div>
          <div className="navbar-end">
          <NavLink to='/login'
                  className={({ isActive }) => isActive ? 'text-purple-600 px-4 py-2 font-bold rounded-lg border border-purple-700  ' : 'font-semibold text-purple-800'}>
                  Login</NavLink>
          </div>
        </div>
  
      </div>
    );
};

export default Navbar;
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [isAdmin]=useAdmin();
  const [cart]=useCart();


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };


  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden bg-red-400">
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
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-red-400"
            >
              {/* {navOptions} */}
              <li>
                <Link to="/menu">Our Menu</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order/salad">Order</Link>
              </li>
              <li>
                <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                  </button>
                </Link>
              </li>
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-active btn-ghost"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* {navOptions} */}
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/order/salad">Order</Link>
            </li>
            <li>
                <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link>
              </li>
            <li>
              <Link to="/dashboard/mycart">
                <button className="btn">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
              </Link>
            </li>
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-ghost"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;

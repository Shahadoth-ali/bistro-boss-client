/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart,FaWallet,FaCalendarAlt,FaHome, FaUtensils, FaUser, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

const [cart]=useCart();

//TODO
// const isAdmin=true;
const [isAdmin]=useAdmin();


  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">

{
  isAdmin ? <>
    {/* Sidebar content here */}
    <li><NavLink to="/dashboard/adminhome">
      <FaHome></FaHome> Admin Home
      </NavLink></li>

      <li><NavLink to="/dashboard/addItem">
      <FaUtensils></FaUtensils> Add an Item
      </NavLink></li>

      <li><NavLink to="/dashboard/manageitems">
      <FaWallet></FaWallet> Manage Items
      </NavLink></li>

      <li><NavLink to="/">
      <FaBook></FaBook> Manage Bookings
      </NavLink></li>

      <li><NavLink to="/dashboard/allusers">
      <FaUsers></FaUsers> All User
      </NavLink></li>

  </> : <>
    {/* Sidebar content here */}
    <li><NavLink to="/dashboard/userhome">
      <FaHome></FaHome> User Home
      </NavLink></li>

      <li><NavLink to="/">
      <FaCalendarAlt></FaCalendarAlt> Reservations
      </NavLink></li>

      <li><NavLink to="/">
      <FaWallet></FaWallet> Payment History
      </NavLink></li>

      <li><NavLink to="/dashboard/mycart">
      <FaShoppingCart></FaShoppingCart> My Cart
      <span className="badge badge-secondary">+{cart?.length || 0}</span>
      </NavLink>
      </li>
  </>
}
    
      
      <div className="divider"></div>

      <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
      <li><NavLink to="/menu">Our Menu</NavLink></li>
      <li><NavLink to="/order/salad">Order Food</NavLink></li>
      <li></li>

    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;

//bg-[#D1A054]
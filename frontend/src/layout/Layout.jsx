import Sidebar from "../Sidebar";
import { Outlet } from 'react-router-dom';
/* comment for a change */
const Layout = () => {    
    return (
      <div>
        <Sidebar /> 
        <Outlet />
      </div>
    );
};

export default Layout;
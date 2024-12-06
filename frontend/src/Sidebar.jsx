import React, { useState, useEffect, useContext } from 'react';
import './Sidebar.css';
import { BsFillFilePersonFill, BsClipboard2, BsBook, BsArrowBarLeft } from 'react-icons/bs';
import logowhite from './assets/VanvasVanvasWhite.png';
import { useAuth } from './context/AuthContext';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState([]);

  const fetchNavbar = () => {
    if(auth.user.role === "Student"){
      const items = ['Profile', 'Dashboard', 'Courses'];
      const navs = items.map((item, index) => {
        function fetchIcon(item){
          if(item == "profile"){
            return (<BsFillFilePersonFill size={30} />);
          }
          if(item == "dashboard"){
            return (<BsClipboard2 size={30} />);
          }
          if(item == "courses"){
            return (<BsBook size={30} />);
          }
        }
        return(
          <li className='nav' key={index}>
            <button onClick={() => navigate(`/${item.toLowerCase()}`)}>
              <div className='nav-elements'>
                {fetchIcon(item.toLowerCase())}
                {item}
              </div>
            </button>
          </li>
        );
      }
        
      )
      setNavbar(navs)
    }
  };

  useEffect(() => {
    fetchNavbar();
  }, []);

  return (
    <div className="sidebar">
      <div className="logowhite">
        <img src={logowhite} alt="Logo" />
      </div>
      <div>
        <ul>
          {navbar}
          <li className="nav-exit">
            <button onClick={() => auth.logOut()}>
              <div className='nav-elements'>
                <BsArrowBarLeft size={30} />
                Exit
              </div>            
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
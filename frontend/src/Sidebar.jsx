import React from 'react';
import './Sidebar.css';
import { BsFillFilePersonFill, BsClipboard2, BsBook, BsArrowBarLeft } from 'react-icons/bs';
import logowhite from './assets/VanvasVanvasWhite.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logowhite">
        <img src={logowhite} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <BsFillFilePersonFill style={{ color: 'white' }} size={30} />
            <span>Profile</span>
          </li>
          <li>
            <BsClipboard2 style={{ color: 'white' }} size={30} />
            <span>Dashboard</span>
          </li>
          <li>
            <BsBook style={{ color: 'white' }} size={30} />
            <span>Courses</span>
          </li>
          <li className="exit">
            <BsArrowBarLeft style={{ color: 'white' }} size={30} />
            <span>Exit</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
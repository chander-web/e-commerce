import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {
  const { items } = props; 
  return (
    <div className="card mb-3 mt-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        {items.map(sidebarList => 
          // eslint-disable-next-line react/jsx-wrap-multilines
          <li key={sidebarList._id} className="list-group-item">
            <NavLink activeClassName="active" to={sidebarList.path} className="text-decoration-none stretched-link">
              {sidebarList.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>

  );
};

export default Sidebar;

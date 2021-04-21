/* eslint-disable no-extra-parens */
/* eslint-disable react/jsx-wrap-multilines */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../../helpers/constrants';
import './menu.css';
const Menu = ({ data }) => {
  return (
    data.map(m => {
      return (
        <li key={m._id}>
          <Link className="nav-link" to={`/products/${m.slug}`}>
            {m.name}
          </Link>

          {m.children.length > 0 && (
            <ul key={m._id}>
              <li>
                <Link className="nav-link" to={`/products/${data.slug}`}>
                  <Menu data={m.children} />
                </Link></li>
            </ul>
          )
          }
        </li>
      );
    }
    )
  );
};



const TopMenu = () => {

  const [allMenus, setMenu] = useState([]);
  useEffect(async() => {
    const result = await axios.get(APIURL.ALL_MENU);
    setMenu(result.data.data);
  }, []);

  return (
    <React.Fragment>
      <ul className="main-navigation">
        {allMenus.map(menu => {
          if (menu.children.length) return (
            <Menu data={[menu]} key={`${menu._id}`} />
          ); else return (
            <li key={menu._id}> 
              <Link className="nav-link" to={`/products/${menu.slug}`}>
                {menu.name}
              </Link>
            </li>
          );
        }
        )
        }
      </ul>
    </React.Fragment>
  );
};

export default TopMenu;

import React from "react";
import { NavLink,useHistory ,useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";


const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
const history = useHistory();
  const location = useLocation();
  const intl = useIntl();
  return (
    <ProSidebar
      rtl={rtl}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="sidebar-header">
          <p className="user-name text-white mb-2">John Doe</p>
          <p className="user-email">johndoe@withinpixels.com</p>
          <div className="d-flex justify-content-center">
            <div className="position-absolute bottom-0">
              <img
                src="./assets/images/user.png"
                alt="User profile"
                className="user-image"
              />
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={
              <span className="badge red">
                {intl.formatMessage({ id: "new" })}
              </span>
            }
          >
            <NavLink exact to={"/"}>
              {intl.formatMessage({ id: "dashboard" })}
            </NavLink>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
          <NavLink exact to={"/plan-Journey"}>
            {intl.formatMessage({ id: "Plan Journey" })}
            </NavLink>
          </MenuItem>
        </Menu>
        {/* <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: "withSuffix" })}
            icon={<FaRegLaughWink />}
            data-element={location.pathname}
          >
            <MenuItem>
              <NavLink exact to={"/about"}>
                {intl.formatMessage({ id: "submenu" })} About
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/"}>
                {intl.formatMessage({ id: "submenu" })} Home 2
              </NavLink>
            </MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: "withPrefix" })}
            icon={<FaHeart />}
            data-element={location.pathname}
          >
            <MenuItem>
              <NavLink exact to={"/"}>
                {intl.formatMessage({ id: "submenu" })} 1 Home
              </NavLink>
            </MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "multiLevel" })}
            icon={<FaList />}
          >
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3`}>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3.3`}>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.1{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.2{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.3{" "}
                </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu> */}
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <a
            href="https://github.com/rakesh-kumar-pradhan/Railway-Reservation-App"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> {intl.formatMessage({ id: "viewSource" })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;

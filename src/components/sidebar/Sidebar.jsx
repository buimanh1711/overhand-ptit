import "./sidebar.scss";

//Import Icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";


const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="top">
        <img
            src="/images/logo.png"
            alt=""
          />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">PTIT S-Learn</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/mydocument" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>T??i li???u c???a t??i</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to='/library'>
            <li>
              <CreditCardIcon className="icon" />
              <span>Th?? vi???n</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to='/deliver'>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">T??nh n??ng</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">D???ch v???</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          
          <p className="title">T??i kho???n</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>H??? s??</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>C??i ?????t</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={ () => dispatch(logout())}>
              ????ng xu???t
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

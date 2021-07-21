import "./sidebar.css";
import {
  Dashboard,
  Timeline,
  ViewDay,
  Assessment,
  ExitToApp,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Estadistica
            </li>
            <li className="sidebarListItem">
              <ViewDay className="sidebarIcon" />
              Cuentas
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              Metas
            </li>
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              Salir
            </li>
          </ul>
        </div>        
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Wallet Web App version 0.3</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
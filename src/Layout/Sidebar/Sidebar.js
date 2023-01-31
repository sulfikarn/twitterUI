import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
  return (
    <>
      <aside className="col-sm-3 wrapp-sidebar">
        <div className="sidebar">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="logo"/>
          </div>
          <ul className="list-group">
            <li className="list-group-item menu-active">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faHashtag} />
              </span>
              Explore
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faBell} />
              </span>
              Notification
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Messages
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              BookMarks
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Profile
            </li>
            <li className="list-group-item">
              <span className="icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              More
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

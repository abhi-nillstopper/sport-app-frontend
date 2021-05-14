import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as SportHome } from "../../assets/sports_mode.svg";
import { UserContext } from "../../user-context";
import "./top_navigation.css";

export default function TopNavigation(props) {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="top-navigation-bar">
          <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="/">Sports App</Navbar.Brand> */}
            <span>
              <Link to="/">
                <SportHome />
                <span> Sport App</span>
              </Link>
            </span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Link to="/">Dashboard</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/events">New Event</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/myregistration">My Registration</Link>
                </Nav.Item>
                <Nav.Item>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      ) : (
        <></>
      )}
      <div className="content">{props.children}</div>
    </>
  );
}

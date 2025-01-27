import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./adminHeader.css";

const CardHeader = () => {  // Capitalized the component name
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Navbar bg={token ? "primary" : "dark"} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">
            <strong>{token ? "Logged-In" : "Not-LoggedIn"}</strong>
          </Navbar.Brand>
          <Nav className="ml-auto">
            {token ? (
              <>
                <Nav.Link as={Link} to="/cart" className="nav-link">
                  Card
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard" className="nav-link">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="nav-link" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-link">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="nav-link">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CardHeader;  // Export with the corrected name

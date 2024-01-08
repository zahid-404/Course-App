import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Alert,
} from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

const Header = () => {
  // State to manage alert and token
  const [token, setToken] = useLocalStorage("token", "");
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in based on the presence of the token
  const isLoggedIn = !!token;

  // Function to handle the logout process
  const handleLogout = () => {
    // Clear the authentication token
    setToken("");
    // Display the logout success alert
    setShowLogoutAlert(true);

    // Hide the alert and navigate to the home page after a delay
    setTimeout(() => {
      setShowLogoutAlert(false);
      navigate("/");
    }, 1000);
  };

  return (
    <Container maxWidth="lg">
      {/* App Bar for the header */}
      <AppBar position="static" className="bg-blue-500 rounded-md">
        {/* Toolbar containing the header content */}
        <Toolbar className="flex justify-between">
          {/* Brand/logo with a link to the home page */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "white" }}
          >
            Coursera
          </Typography>
          {/* Navigation buttons */}
          <div>
            {/* About Page Button */}
            <Button color="inherit" component={Link} to="/about">
              Create Course
            </Button>
            {/* Courses Page Button */}
            <Button color="inherit" component={Link} to="/courses">
              Courses
            </Button>
            {/* Conditionally render "My Account" and "Logout" based on user login status */}
            {isLoggedIn ? (
              <>
                <Button color="inherit" component={Link} to="/me">
                  My Account
                </Button>
                <Button onClick={handleLogout} color="inherit">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* Conditionally render the logout success alert */}
      {showLogoutAlert && (
        <Alert severity="success" color="info">
          Logout successful!
        </Alert>
      )}
    </Container>
  );
};

export default Header;

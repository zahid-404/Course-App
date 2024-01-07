// Importing necessary components and hooks from React and Material-UI
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { useLocalStorage } from "@uidotdev/usehooks";

// Landing component for the home page
const Landing = () => {
  // Retrieve the token from local storage
  const [token] = useLocalStorage("token", "");
  // Condition to check if the user is logged in
  const isLoggedIn = !!token;

  return (
    // Container for the landing page content
    <Container
      maxWidth="lg"
      // Styling for the main container with flex layout, centering, and gradient background
      className="flex items-center justify-center h-screen  text-white"
    >
      {/* Main content of the landing page */}
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to the Course Uploader
        </h1>
        {/* Subheading */}
        <p className="text-lg mb-8 text-gray-800">
          Share your knowledge by uploading your courses.
        </p>
        {isLoggedIn ? (
          // Display a greeting if the user is logged in
          <>
            <h1>Hello, User!</h1>
          </>
        ) : (
          // Display sign-up and login buttons if the user is not logged in
          <>
            <div className="space-x-4">
              {/* Sign Up Button */}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signup"
              >
                Sign Up
              </Button>
              {/* Login Button */}
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

// Exporting the Landing component for use in other parts of the application
export default Landing;

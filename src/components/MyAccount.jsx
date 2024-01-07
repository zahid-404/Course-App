// Importing necessary components and hooks from React and Material-UI
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// MyAccount component for displaying user account information
const MyAccount = () => {
  return (
    // Container for the MyAccount component with a maximum width
    <Container
      maxWidth="lg"
      // Styling for the main container with flex layout, centering, and background gradient
      className="flex items-center justify-center h-screen bg-gradient-to-b from--500 via-red-700 to-red-900 text-white"
    >
      {/* Main content of the MyAccount page */}
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Your Account
        </h1>
        {/* Description */}
        <Typography className="text-lg mb-8 text-gray-800">
          Create the best courses and share your knowledge with the world! Our
          website is the best place creating courses it.
        </Typography>
        {/* Button to navigate to the Create Course page */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
        >
          Create a Course
        </Button>
      </div>
    </Container>
  );
};

// Exporting the MyAccount component for use in other parts of the application
export default MyAccount;

// Importing necessary components and hooks from React and Material-UI
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import useSignup from "../hooks/useSignup";

// Signup component for user registration
const Signup = () => {
  // State to manage the user input for email and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State to manage the visibility of the success alert
  const [showSignupAlert, setShowSignupAlert] = useState(false);
  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Custom hook for handling the signup logic
  const { signup, error } = useSignup();

  // Handling errors during the signup process
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  // Function to handle the signup button click
  const handleSignup = async () => {
    // Creating an admin object with the user input
    const admin = { username, password };

    try {
      // Calling the signup function from the custom hook
      await signup(admin);

      // Clear the text fields
      setUsername("");
      setPassword("");

      // Show the success alert
      setShowSignupAlert(true);
      // Hide the success alert after a certain duration (e.g., 3000 milliseconds)
      setTimeout(() => {
        setShowSignupAlert(false);
        // Navigate to the home page
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Failed to signup", error);
    }
  };

  return (
    // Container for the signup component with a maximum width
    <Container
      maxWidth="lg"
      // Styling for the main container with flex layout, centering, and full height
      className="flex items-center justify-center h-screen"
    >
      {/* Card for displaying the signup form */}
      <Card elevation={10} className="w-96">
        {/* Card content with the signup form */}
        <CardContent className="text-center">
          {/* Conditionally render signup alert */}
          {showSignupAlert && (
            <Alert severity="success" color="info">
              Signup successful!
            </Alert>
          )}
          {/* Heading */}
          <Typography
            variant="h4"
            component="div"
            className="mb-4 text-blue-500"
          >
            Register to the Website
          </Typography>
          {/* Email input field */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Password input field */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Signup button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          {/* Login link */}
          <Typography className="mt-4 text-gray-600">
            Already a user?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

// Exporting the Signup component for use in other parts of the application
export default Signup;

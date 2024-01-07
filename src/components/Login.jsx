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
import useLogin from "../hooks/useLogin";

// Login component for user authentication
const Login = () => {
  // State to manage the user input for email and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State to manage the visibility of the success alert
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  // Hook to navigate to different pages
  const navigate = useNavigate();

  // Custom hook for handling the login logic
  const { login, error } = useLogin();

  // Handling errors during the login process
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  // Function to handle the login button click
  const handleLogin = async () => {
    // Creating an admin object with the user input
    const admin = { username, password };

    try {
      // Calling the login function from the custom hook
      await login(admin);

      // Clear the text fields
      setUsername("");
      setPassword("");

      // Show the success alert
      setShowLoginAlert(true);
      // Hide the success alert after a certain duration (e.g., 3000 milliseconds)
      setTimeout(() => {
        setShowLoginAlert(false);
        // Navigate to the home page
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    // Container for the login component with a maximum width
    <Container
      maxWidth="lg"
      // Styling for the main container with flex layout, centering, and full height
      className="flex items-center justify-center h-screen"
    >
      {/* Card for displaying the login form */}
      <Card elevation={10} className="w-96">
        {/* Card content with the login form */}
        <CardContent className="text-center">
          {/* Conditionally render the login alert */}
          {showLoginAlert && (
            <Alert severity="success" color="info">
              Login successful!
            </Alert>
          )}
          {/* Heading */}
          <Typography
            variant="h4"
            component="div"
            className="mb-4 text-blue-500"
          >
            Login to Your Account
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
          {/* Login button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          {/* Signup link */}
          <Typography className="mt-4 text-gray-600">
            New user?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

// Exporting the Login component for use in other parts of the application
export default Login;

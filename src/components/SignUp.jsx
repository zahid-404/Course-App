import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
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
import axios from "axios";

const Signup = () => {
  const BASE_URL = process.env.BASE_URL;
  // State variables to manage user input, tokens, alerts, and errors
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setToken] = useLocalStorage("token", "");
  const [showSignupAlert, setShowSignupAlert] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle signup button click
  const handleSignup = async () => {
    // Creating an admin object with the user input
    const admin = { username, password };

    try {
      // Making a POST request to the signup endpoint
      const response = await axios.post(`${BASE_URL}/admin/signup`, admin);

      // Extracting token from the response and storing it in local storage
      const data = response.data;
      setToken(data.token);

      // Clearing the text fields
      setUsername("");
      setPassword("");

      // Displaying the success alert
      setShowSignupAlert(true);

      // Hiding the success alert after a certain duration and navigating to the home page
      setTimeout(() => {
        setShowSignupAlert(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      // Handling errors during signup
      setError(
        error?.response?.data?.message ??
          "An error occurred during signup. Please try again."
      );
      // hiding error alert
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    // Main container
    <Container
      maxWidth="lg"
      className="flex items-center justify-center h-screen"
    >
      {/* Card for displaying the signup form */}
      <Card elevation={10} className="w-96">
        {/* Card content with the signup form */}
        <CardContent className="text-center">
          {/* Conditionally render signup success alert */}
          {showSignupAlert && (
            <Alert severity="success" color="info">
              Signup successful!
            </Alert>
          )}

          {/* Conditionally render signup error alert */}
          {error && (
            <Alert severity="error" color="error">
              {error}
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

export default Signup;

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
import { BASE_URL } from "../config";

const Login = () => {
  // State to manage the user input for email, password, alert, token
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  // Function to handle the login
  const handleLogin = async () => {
    const headers = {
      "Content-Type": "application/json",
      username: username,
      password: password,
    };

    try {
      // Making a POST request to the login endpoint
      const response = await axios.post(
        `${BASE_URL}/admin/login`,
        {},
        {
          headers: headers,
        }
      );

      // Extracting token from the response and storing it in local storage
      const data = response.data;
      setToken(data.token);

      // Clearing the text fields
      setUsername("");
      setPassword("");

      // Displaying the success alert
      setShowLoginAlert(true);

      // Hiding the success alert after a certain duration and navigating to the home page
      setTimeout(() => {
        setShowLoginAlert(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      // Handling errors during signup
      setError(
        error?.response?.data?.message ??
          "An error occurred during login. Please try again."
      );
      // hiding error alert
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    // Container for the login component
    <Container
      maxWidth="lg"
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
          {/* Conditionally render login error alert */}
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

export default Login;

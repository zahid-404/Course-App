// Importing necessary hooks from external libraries
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

// Custom hook for handling user login functionality
const useLogin = () => {
  // State to manage potential errors during login
  const [error, setError] = useState(null);

  // Using the useLocalStorage hook to manage the user's token in local storage
  // The token is initially set to an empty string
  const [, setToken] = useLocalStorage("token", "");

  // Function for handling user login
  const login = async (admin) => {
    try {
      // Sending a POST request to the server for user login
      const response = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          username: admin.username,
          password: admin.password,
        },
      });

      // Parsing the response data as JSON
      const data = await response.json();

      // Setting the user's token in local storage based on the server response
      setToken(data.token);

      // If the server response is not okay, throw an error
      if (!response.ok) throw new Error("Failed to log in");

      // Resetting the error state if there are no errors
      setError(null);
    } catch (error) {
      // Handling errors during the login process and updating the error state
      setError(error);
    }
  };

  // Returning the login function and the error state for external use
  return { login, error };
};

// Exporting the useLogin hook for use in other components
export default useLogin;

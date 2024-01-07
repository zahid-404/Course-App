// Importing the useLocalStorage hook for managing data in local storage
// and the useState hook for managing state in a functional component
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

// Custom hook for handling user signup functionality
const useSignup = () => {
  // State to manage potential errors during signup
  const [error, setError] = useState(null);

  // Using the useLocalStorage hook to manage the user's token in local storage
  // The token is initially set to an empty string
  const [, setToken] = useLocalStorage("token", "");

  // Function for handling user signup
  const signup = async (admin) => {
    try {
      // Sending a POST request to the server for user signup
      const response = await fetch("http://localhost:3000/admin/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(admin),
      });

      // Parsing the response data as JSON
      const data = await response.json();

      // Setting the user's token in local storage based on the server response
      setToken(data.token);

      // If the server response is not okay, throw an error
      if (!response.ok) throw new Error("Failed to sign up");

      // Resetting the error state if there are no errors
      setError(null);
    } catch (error) {
      // Handling errors during the signup process and updating the error state
      setError(error);
    }
  };

  // Returning the signup function and the error state for external use
  return { signup, error };
};

// Exporting the useSignup hook for use in other components
export default useSignup;

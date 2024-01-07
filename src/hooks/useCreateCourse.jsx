// Importing the useState hook for managing state in a functional component
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

// Custom hook for handling the creation of a new course
const useCreateCourse = () => {
  // State to manage potential errors during course creation
  const [error, setError] = useState(null);

  // retrive token from local storage
  const [token] = useLocalStorage("token", "")

  // Function for creating a new course
  const createCourse = async (course) => {
    try {
      // Sending a POST request to the server to create a new course
      const response = await fetch("http://localhost:3000/admin/courses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          // Including the authorization token from local storage in the request headers
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(course),
      });

      // Parsing the response data as JSON
      const data = await response.json();
      console.log(data);

      // If the server response is not okay, throw an error
      if (!response.ok) throw new Error("Failed to create a new course");

      // Resetting the error state if there are no errors
      setError(null);
    } catch (error) {
      // Handling errors during the course creation process and updating the error state
      setError(error);
    }
  };

  // Returning the createCourse function and the error state for external use
  return { createCourse, error };
};

// Exporting the useCreateCourse hook for use in other components
export default useCreateCourse;

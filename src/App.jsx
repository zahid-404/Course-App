import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// Functional component representing the main structure of the application
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

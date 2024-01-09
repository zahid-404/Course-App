import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { RecoilRoot} from "recoil";

// Functional component representing the main structure of the application
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Header />
        <Outlet />
      </RecoilRoot>
    </div>
  );
};

export default App;

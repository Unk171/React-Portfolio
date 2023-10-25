import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <div className="mx-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

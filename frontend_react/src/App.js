import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Header from './components/Header';
import Footer from "./components/Footer";
import UserMain from "./pages/Users/UserMain";
import HomeGroup from "./pages/Groups/HomeGroup";



function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/user" element={<UserMain/>} />
          <Route path="/group" element={<HomeGroup/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

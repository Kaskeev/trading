import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ellipse1 from "./assets/Ellipse1.png";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="ellipse4"></div>
      <Header />
      <Content />
      <Main />
    </div>
  );
}

export default App;

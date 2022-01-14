import logo from "./logo.svg";
import "./App.css";
import DemoGrid from "./DemoBefore/TailwindcssComponent/DemoGrid";
import DemoPaddingMargin from "./DemoBefore/TailwindcssComponent/DemoPaddingMargin";
import DemoWidthHeight from "./DemoBefore/TailwindcssComponent/DemoWidthHeight";
import DemoFlex from "./DemoBefore/TailwindcssComponent/DemoFlex";
import DemoTextBackground from "./DemoBefore/TailwindcssComponent/DemoTextBackground";
import DemoResponsive from "./DemoBefore/TailwindcssComponent/DemoResponsive";
import DemoCustomCss from "./DemoBefore/TailwindcssComponent/DemoCustomCss";
import BaiTapLayOut from "./DemoBefore/TailwindcssComponent/BaiTapLayOut";
import DemoJoin from "./DemoBefore/LodashComponent/DemoJoin";
import DemoFirstLast from "./DemoBefore/LodashComponent/DemoFirstLast";
import DemoChunk from "./DemoBefore/LodashComponent/DemoChunk";
import DemoFill from "./DemoBefore/LodashComponent/DemoFill";
//! project
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DetailFilm from "./pages/DetailFilm/DetailFilm";
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/detailfilm/:id" Component={DetailFilm} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <HomeTemplate exact path="/" Component={Home} />
      </BrowserRouter>
      {/* <DemoFill/> */}
      {/* <DemoChunk/> */}
      {/* <DemoFirstLast /> */}
      {/* <DemoJoin /> */}
      {/* <BaiTapLayOut /> */}
      {/* <DemoCustomCss /> */}
      {/* <DemoResponsive /> */}
      {/* <DemoTextBackground /> */}
      {/* <DemoFlex /> */}
      {/* <DemoWidthHeight /> */}
      {/* <DemoPaddingMargin /> */}
      {/* <DemoGrid /> */}
    </div>
  );
}

export default App;

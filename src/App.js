import { Route, Routes } from "react-router-dom";
import CardDetails from "./components/card/CardDetails";
import BaiTapKhac from "./components/BaiTapKhac";
import MyProjects from "./components/MyProjects";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<MyProjects></MyProjects>}></Route>
          <Route
            path="/my-project/:slug"
            element={<CardDetails></CardDetails>}
          ></Route>
          <Route
            path="/bai-tap-khac"
            element={<BaiTapKhac></BaiTapKhac>}
          ></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
}
export default App;

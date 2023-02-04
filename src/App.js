import { Route, Routes } from "react-router-dom";
import LiveView from "./components/card/LiveView";

import ProjectList from "./components/layout/ProjectList";
import Nav from "./components/layout/Header";
import Others from "./components/layout/Orthers";
import PageNotFound from "./components/layout/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<ProjectList></ProjectList>}></Route>
          <Route
            path="/my-project/:slug"
            element={<LiveView></LiveView>}
          ></Route>
          <Route
            path="/bai-tap-khac"
            element={<Others></Others>}
          ></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}
export default App;

import { Link, Route, Routes } from "react-router-dom";
import Days from "./component/Days"
import User from "./component/User";
import Change from "./component/Change";
import AppGuide from "./component/AppGuide";
import ProblemStatement from "./component/ProblemStatement";


function App() {
  return <div className="text-white bg-gradient-to-b from-gray-800 to-black flex flex-col justify-center font-serif">

    <Routes>
      <Route path="/" element={<Days></Days>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/final" element={<Change></Change>}></Route>
      <Route path="/guide" element={<AppGuide></AppGuide>}></Route>
      <Route path="/ProblemStatement" element={<ProblemStatement></ProblemStatement>}></Route>
    </Routes>
  </div>

}

export default App;


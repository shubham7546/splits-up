import { Route, Routes } from "react-router-dom";
import Days from "./component/Days"
import User from "./component/User";
import AppGuide from "./component/AppGuide";
import ProblemStatement from "./component/ProblemStatement";
import Navbar from "./component/Navbar";
import Cost from "./component/Cost";
import Slots from "./component/Slots";
import FadingComponent from "./component/FadingComponent";


function App() {
  return <div className="text-white bg-gradient-to-b from-gray-800 to-black  font-serif h-screen">

    <Navbar />

    <FadingComponent></FadingComponent>


    <Routes >
      <Route path="/" element={<Days></Days>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/slots" element={<Slots></Slots>}></Route>
      <Route path="/cost" element={<Cost />} />
      <Route path="/guide" element={<AppGuide></AppGuide>}></Route>
      <Route path="/Problem Statement" element={<ProblemStatement></ProblemStatement>}></Route>
    </Routes>


  </div>

}

export default App;


import { Link, Route, Routes } from "react-router-dom";
import Days from "./component/Days"
import User from "./component/User";
import Change from "./component/Change";
import AppGuide from "./component/AppGuide";

function App() {
  return <div className="text-blue-300 bg-gradient-to-b from-gray-800 to-black flex flex-col justify-center">
    <Link to="/guide">
      <button className='px-1 py-1 bg-green-500  rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 font-black'>
        Guide
      </button>
    </Link>
    <Routes>
      <Route path="/" element={<Days></Days>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/final" element={<Change></Change>}></Route>
      <Route path="/guide" element={<AppGuide></AppGuide>}></Route>
    </Routes>
  </div>

}

export default App;


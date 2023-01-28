import { useAppcontext } from "./state/Context";
import {Routes, Route, Link} from 'react-router-dom'
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {

  const {count, add} = useAppcontext()

  return (
    <div>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

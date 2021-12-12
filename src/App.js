import { Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} exact />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/dashBoard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

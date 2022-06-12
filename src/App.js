import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import UserDetail from './components/UserDetail/UserDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:phone" element={<UserDetail />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

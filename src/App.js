import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/detail/:phone" element={<UserDetail />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Main from './pages/Main';
import View from './pages/View';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

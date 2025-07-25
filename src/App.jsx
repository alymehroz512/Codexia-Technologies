import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/content/:type" element={<ContentPage />} />
    </Routes>
  );
}

export default App;
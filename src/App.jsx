import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGE from './pages-cont/page1'
import BLOG from './pages-cont/BLOG';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PAGE />} />
          <Route path="/blog" element={<BLOG />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

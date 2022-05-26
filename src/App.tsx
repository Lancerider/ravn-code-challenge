import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/MainLayout';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

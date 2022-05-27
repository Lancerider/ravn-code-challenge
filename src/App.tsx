import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

import Layout from './components/layout/MainLayout';
import Home from './pages/home/Home';

import './App.css';

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={ initialState }>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

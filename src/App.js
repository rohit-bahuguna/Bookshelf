import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import Layout from './compoents/Layout';

function App() {
  return (
    <Layout >

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;

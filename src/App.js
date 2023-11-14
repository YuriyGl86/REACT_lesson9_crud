import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import { NewPage } from './pages/NewPage';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { DetailViewPage } from './pages/DetailViewPage';

function App() {
  return (
    
          <Routes>
            <Route path="/" element={ <Layout/>}>
              <Route index element={ <HomePage/>} />
              <Route path="/posts/new" element={ <NewPage/>} />
              <Route path="/posts/:id" element={ <DetailViewPage/>} />
              {/* <Route path="/drift" element={<DriftPage/>} />
              <Route path="/timeattack" element={<TimeAttackPage/>} />
              <Route path="/forza" element={<ForzaPage/>} /> */}
            </Route>
          </Routes>

  );
}

export default App;
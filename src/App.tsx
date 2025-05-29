import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {Navigation} from './components/Navigation/Navigation.tsx';
import ListCharactersPage from './pages/characters/listCharactersPage';
import ListLocationsPage from './pages/locations/listLocationsPage';
import ListEpisodesPage from './pages/episodes/listEpisodesPage';
import DetailCharacterPage from './pages/characters/detailCharacterPage';
import NotFoundPage from './pages/NotFound';
import DetailEpisodePage from './pages/episodes/detailEpisodePage';
import DetailLocationPage from './pages/locations/detailLocationPage';

function App() {
  return (
    <>
      <Navigation/>
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/characters" element={<ListCharactersPage/>}/>
          <Route path="/locations" element={<ListLocationsPage/>}/>
          <Route path="/episodes" element={<ListEpisodesPage/>}/>
          <Route path="/characters/:id" element={<DetailCharacterPage/>}/>
          <Route path="/locations/:id" element={<DetailLocationPage/>}/>
          <Route path="/episodes/:id" element={<DetailEpisodePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App

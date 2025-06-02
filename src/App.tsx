import './styles/App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage';
import {Navigation} from './components/Navigation/Navigation.tsx';
import ListCharactersPage from './pages/characters';
import ListLocationsPage from './pages/locations';
import ListEpisodesPage from './pages/episodes';
import DetailCharacterPage from './pages/characters/[id]]';
import {NotFound} from './pages/notFound';
import DetailEpisodePage from './pages/episodes/[id]';
import DetailLocationPage from './pages/locations/[id]';

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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App

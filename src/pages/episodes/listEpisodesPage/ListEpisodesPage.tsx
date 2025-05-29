import EpisodeList from '../../../components/EpisodeList';
import episodes from '../../../data/episode/episode.json';

export const ListEpisodesPage = () => {
  return (
    <div>
      <h2>Эпизоды</h2>
      <EpisodeList episodes={episodes}/>
    </div>
  )
}

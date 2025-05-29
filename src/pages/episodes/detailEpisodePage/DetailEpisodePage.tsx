import {useParams} from 'react-router-dom';
import type {Episode} from '../../../core/interfaces/interfaces.ts';
import episode from '../../../data/episode/episode.json';
import NotFoundPage from "../../NotFound";
import EpisodeDetaile from "../../../components/EpisodeDetaile";

export const DetailEpisodePage = () => {
  const params = useParams();
  const episodeItem: Episode | undefined = episode.find((episode) => episode.id === Number(params.id));

  if (episodeItem) {
    return (
      <div>
        <EpisodeDetaile episodeItem={episodeItem}/>
      </div>
    )
  } else {
    return <NotFoundPage/>;
  }
}

import {useParams} from 'react-router-dom';
import type {Episode} from '../../../core/interfaces/interfaces.ts';
import episode from '../../../data/episode/episode.json';
import {NotFound }from "../../notFound";
import EpisodeDetaile from "../../../components/EpisodeDetaile";

export const DetaileEpisode = () => {
  const params = useParams();
  const episodeItem: Episode | undefined = episode.find((episode) => episode.id === Number(params.id));

  if (episodeItem) {
    return (
      <div>
        <EpisodeDetaile episodeItem={episodeItem}/>
      </div>
    )
  } else {
    return <NotFound/>;
  }
}

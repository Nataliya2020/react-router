import type {PropsEpisode} from "../../core/interfaces/interfaces.ts";
import {getDateValue} from "../../core/utils/getDateValue.ts";

export const EpisodeDetaile = ({episodeItem}: PropsEpisode) => {
  return (
    <div>
      <h4>{episodeItem.name}</h4>
      <p><span className="name-of-parameters">Дата выхода:</span> {episodeItem.air_date}</p>
      <p><span className="name-of-parameters">Эпизод:</span> {episodeItem.episode}</p>
      <p><span className="name-of-parameters">Дата создания:</span> {getDateValue(episodeItem.created)}</p>
      <p></p>
    </div>
  )
}

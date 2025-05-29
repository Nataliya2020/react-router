import type {Episode} from '../../core/interfaces/interfaces.ts';
import {NavLink} from "react-router-dom";

export const EpisodeList = ({episodes}: { episodes: Episode[] }) => {
  return (
    <ul>
      {
        episodes.map((episode) => {
          return (
            <li key={episode.id}>
              <NavLink to={`/episodes/${episode.id}`} className="link">
                {episode.name}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

import type {Location} from '../../core/interfaces/interfaces.ts';
import {NavLink} from "react-router-dom";

export const LocationList = ({locations}: { locations: Location[] }) => {
  return (
    <ul>
      {
        locations.map((location) => {
          return (
            <li key={location.id}>
              <NavLink to={`/locations/${location.id}`} className="link">
                {location.name}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

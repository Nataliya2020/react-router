import type {Character} from '../../core/interfaces/interfaces.ts'
import {NavLink} from "react-router-dom";

export const CharacterList = ({characters}: { characters: Character[] }) => {
  return (
    <ul>
      {
        characters.map((character) => {
          return (
            <li key={character.id}>
              <NavLink to={`/characters/${character.id}`} className="link">
                {character.name}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

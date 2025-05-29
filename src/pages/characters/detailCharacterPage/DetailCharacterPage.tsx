import type {Character} from '../../../core/interfaces/interfaces.ts';
import CharacterDetaile from "../../../components/CharacterDetaile";
import characters from "../../../data/characters/characters.json";
import NotFoundPage from "../../NotFound";
import {useParams} from "react-router-dom";

export const DetailCharacterPage = () => {
  const params = useParams();
  const characterItem: Character | undefined = characters.find((character) => character.id === Number(params.id));

  if (characterItem) {
    return (
      <div>
        <CharacterDetaile characterItem={characterItem}/>
      </div>
    )
  } else {
    return <NotFoundPage/>;
  }
};

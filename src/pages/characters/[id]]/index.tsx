import type {Character} from '../../../core/interfaces/interfaces.ts';
import CharacterDetaile from "../../../components/CharacterDetaile";
import characters from "../../../data/characters/characters.json";
import {NotFound} from "../../notFound";
import {useParams} from "react-router-dom";

export const DetaileCharacter = () => {
  const params = useParams();
  const characterItem: Character | undefined = characters.find((character) => character.id === Number(params.id));

  if (characterItem) {
    return (
      <div>
        <CharacterDetaile characterItem={characterItem}/>
      </div>
    )
  } else {
    return <NotFound/>;
  }
};

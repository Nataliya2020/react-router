import characters from '../../../data/characters/characters.json';
import CharacterList from "../../../components/CharacterList";

export const ListCharacterPage = () => {
  return (
    <div>
      <h2>Персонажи</h2>
      <CharacterList characters={characters}/>
    </div>
  );
};

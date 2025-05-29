import type {PropsCharacter} from '../../core/interfaces/interfaces.ts';
import {getDateValue} from "../../core/utils/getDateValue.ts";

export const CharacterDetaile = ({characterItem}: PropsCharacter) => {
  return (
    <div>
      <img src={characterItem.image} alt={characterItem.name}/>
      <h4> {characterItem.name}</h4>
      <p><span className="name-of-parameters">Статус:</span> {characterItem.status}</p>
      <p><span className="name-of-parameters">Порода:</span> {characterItem.species}</p>
      <p><span className="name-of-parameters">Тип:</span> {characterItem.type}</p>
      <p><span className="name-of-parameters">Пол:</span> {characterItem.gender}</p>
      <p><span className="name-of-parameters">Дата создания:</span> {getDateValue(characterItem.created)}</p>
    </div>
  )
}

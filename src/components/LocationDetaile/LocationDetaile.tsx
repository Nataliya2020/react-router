import type {PropsLocation} from "../../core/interfaces/interfaces.ts";
import {getDateValue} from "../../core/utils/getDateValue.ts";

export const LocationDetaile = ({locationItem}: PropsLocation) => {

  return (
    <div>
      <h4>{locationItem.name}</h4>
      <p><span className="name-of-parameters">Тип:</span> {locationItem.type}</p>
      <p><span className="name-of-parameters">Измерение:</span> {locationItem.dimension}</p>
      <p><span className="name-of-parameters">Дата создания:</span> {getDateValue(locationItem.created)}</p>
    </div>
  )
}

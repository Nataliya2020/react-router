import {useParams} from "react-router-dom";
import locations from "../../../data/location/location.json";
import NotFoundPage from "../../NotFound";
import LocationDetaile from "../../../components/LocationDetaile";
import type {Location as LocationType} from "../../../core/interfaces/interfaces.ts"; //если оставить Location,
// то будет воспринят как встроенный тип, относящийся к API браузера

export const DetailLocationPage = () => {
  const params = useParams();
  const locationItem: LocationType | undefined = locations
    .find((location) => location.id === Number(params.id));

  if (locationItem) {
    return (
      <div>
        <LocationDetaile locationItem={locationItem}/>
      </div>
    )
  } else {
    return <NotFoundPage/>;
  }
}

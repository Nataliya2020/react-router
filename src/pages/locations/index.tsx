import LocationList from '../../components/LocationList';
import locations from '../../data/location/location.json';

export const listLocation = () => {
  return (
    <div>
      <h2>Локации</h2>
      <LocationList locations={locations}/>
    </div>
  )
}

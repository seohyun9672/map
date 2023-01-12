import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { stopsInfoArr, polyline } from '../Map/data'

import { MapContainer, TileLayer, Popup, Marker, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

  // const position = [49.28594, -123.11129];
  const pathOptions = { color: 'blue' };
  const center = [49.28594, -123.11129];

  return (
    <MapContainer className={style.map} center={center} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stopsInfoArr.map((o, i) =>
        <Marker position={o.position}>
          <Popup>
            Skytrain. <br /> {o.name} Station.
          </Popup>
        </Marker>
      )}
      <Polyline pathOptions={pathOptions} positions={polyline}></Polyline>
    </MapContainer>)
}
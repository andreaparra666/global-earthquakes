import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';

import Earthquakes from './Earthquakes';
import Legend from './Legend';
import tectonicPlates from './PB2002_boundaries.json';
import fallasResnom from './fallasResnom.json';
import { mapHeight, tectonicPlatesStyle, tileLayers , fallasStyle} from './constants';

export default function Map() {
  return (
    <MapContainer center={[30, -107]} zoom={5} style={mapHeight}>
      <LayersControl position="topright">
        {tileLayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
        <LayersControl.Overlay name="Placas Tectonicas">
          <GeoJSON
            data={tectonicPlates as GeoJSON.GeoJsonObject}
            style={tectonicPlatesStyle}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Fallas">
          <GeoJSON
            data={fallasResnom as GeoJSON.GeoJsonObject}
            style={fallasStyle}
          />
        </LayersControl.Overlay>
      </LayersControl>

      <Earthquakes />
      <ScaleControl />
      <Legend />
    </MapContainer>
  );
}

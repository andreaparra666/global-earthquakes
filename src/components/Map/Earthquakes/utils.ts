import { Layer } from 'leaflet';

import { FeatureProps } from './models';

// Convert Epoch time to human readable with specific timezone
const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000; // This converts to UTC 00:00
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

const onEachFeature = (feature: FeatureProps, layer: Layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates }
  } = feature;

  const popupContent = `
    <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
    <b>Lugar</b>: ${place ?? 'Unknown'} <br>
    <b>Hora (GMC+3)</b>: ${timeConverter(time, 3)} <br>
    <b>Lat</b>: ${coordinates[1]}
    <b>Lon</b>: ${coordinates[0]} <br>
    <b>Profundidad</b>: ${coordinates[2]} km <br>
    <b>Magnitud</b>: ${mag} Richter <br>
    <a href=${url} target="_blank">click aqui para ver más información</a>
    <button onclick='guardar(${title},${place},${time},${coordinates[1]},${coordinates[0]},${coordinates[2]},${mag},${url})'>Guardar</button>
  `;

  layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

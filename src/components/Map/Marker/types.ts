import { LatLngTuple } from 'leaflet';

export interface ILocationMarker {
  text: string;
  position: LatLngTuple;
  callback: (e: LatLngTuple) => void;
}

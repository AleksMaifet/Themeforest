import React, { memo } from 'react';

import { Icon } from 'leaflet';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

import { ReturnComponentType } from '@/commonTypes';
import { PNG } from '@/constants';

import { ILocationMarker } from './types';

const { MapMark } = PNG;

const customMarker = new Icon({
  iconUrl: MapMark,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const LocationMarker: React.FC<ILocationMarker> = ({
  text,
  position,
  callback,
}): ReturnComponentType => {
  const map = useMapEvents({
    dblclick() {
      map.locate();
    },
    locationfound(e) {
      const { lat, lng } = e.latlng;
      callback([lat, lng]);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <Marker position={position} icon={customMarker}>
      <Popup>{text}</Popup>
    </Marker>
  );
};

export default memo(LocationMarker);

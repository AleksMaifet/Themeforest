import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import { ReturnComponentType } from '@/commonTypes';
import { ContactsSection } from '@/mocks';
import theme from '@/theme';

import LocationMarker from './Marker';

const {
  ContactSecondSection: {
    map: { location },
    popUp: { text },
  },
} = ContactsSection;

const style = {
  height: theme.spaces[14] * 6,
};

const Map = (): ReturnComponentType => {
  const [position, setPosition] = useState<LatLngTuple>(location.default);

  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={theme.opacity.opacity50}
        zIndex={1}
      />
      <LocationMarker position={position} callback={setPosition} text={text} />
    </MapContainer>
  );
};

export default Map;

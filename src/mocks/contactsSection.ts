import { LatLngTuple } from 'leaflet';

import { SVG } from '@/constants';

const { EmailIcon, PhotoIcon, AddressIcon } = SVG;

const ContactsSection = {
  ContactsFirstSection: {
    info: [
      {
        id: '1',
        Image: EmailIcon,
        title: 'Email',
        text: 'ensome@info.co.us',
      },
      {
        id: '2',
        Image: PhotoIcon,
        title: 'Phone',
        text: '+1 601-201-5580',
      },
      {
        id: '3',
        Image: AddressIcon,
        title: 'Address',
        text: '1642 Washington Ave, Jackson, MS',
      },
    ],
  },
  ContactSecondSection: {
    map: {
      location: {
        default: [42.23, -84.4] as LatLngTuple,
      },
    },
    popUp: {
      text: 'You are here',
    },
  },
};

export { ContactsSection };

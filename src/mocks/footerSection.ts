import { PAGE, SVG } from '@/constants';

const { BehanceIcon, DribbleIcon, FacebookIcon, LinkedinIcon, TwitterIcon, YouTubeIcon } =
  SVG;

const FooterSection = {
  title: 'Subscribe to our newsletter',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  social: {
    socialText:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
    socialIcon: [
      { id: '1', Icon: BehanceIcon },
      { id: '2', Icon: DribbleIcon },
      { id: '3', Icon: FacebookIcon },
      { id: '4', Icon: LinkedinIcon },
      { id: '5', Icon: TwitterIcon },
      { id: '6', Icon: YouTubeIcon },
    ],
  },
  info: [
    {
      title: 'Quick link',
      items: Object.values(PAGE),
    },
    {
      title: 'Service',
      items: ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map'],
    },
    {
      title: 'Contact info',
      items: [
        'ensome@info.co.us',
        '+1 601-201-5580',
        '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
      ],
    },
  ],
  copyright: {
    leftBlock: 'Ensome© 2022 All Rights Reserved',
    rightBlock: {
      text: 'Privacy policy',
      preText: 'Terms of us',
    },
  },
};

export { FooterSection };

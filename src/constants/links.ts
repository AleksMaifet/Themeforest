const enum PAGE {
  HOME = 'Home',
  BLOG = 'Blog',
  SOLUTIONS = 'Solutions',
  CONTACTS = 'Contacts',
  OUR_TEAM = 'Our team',
  SERVICES = 'Services',
  ABOUT = 'About',
  FAQ = 'FAQ',
}

const enum PATH {
  HOME_PAGE_ROUTE = '/',
  SECOND_PAGE_ROUTE = '/services',
  THIRD_PAGE_ROUTE = '/about',
  FOURTH_PAGE_ROUTE = '/blog',
  FIFTH_PAGE_ROUTE = '/contacts',
  SIXTH_PAGE_ROUTE = '/solutions',
  SEVENTH_PAGE_ROUTE = '/our_team',
  EIGHTH_PAGE_ROUTE = '/faq',
}

export const headerLinks = [
  {
    name: PAGE.HOME,
    link: PATH.HOME_PAGE_ROUTE,
  },
  {
    name: PAGE.SERVICES,
    link: PATH.SECOND_PAGE_ROUTE,
  },
  {
    name: PAGE.ABOUT,
    link: PATH.THIRD_PAGE_ROUTE,
  },
  {
    name: PAGE.BLOG,
    link: PATH.FOURTH_PAGE_ROUTE,
  },
  {
    name: PAGE.CONTACTS,
    link: PATH.FIFTH_PAGE_ROUTE,
  },
  {
    name: PAGE.SOLUTIONS,
    link: PATH.SIXTH_PAGE_ROUTE,
  },
  {
    name: PAGE.OUR_TEAM,
    link: PATH.SEVENTH_PAGE_ROUTE,
  },
  {
    name: PAGE.FAQ,
    link: PATH.EIGHTH_PAGE_ROUTE,
  },
];

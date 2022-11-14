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
  SECOND_PAGE_ROUTE = '/Blog',
  THIRD_PAGE_ROUTE = '/Solutions',
  FOURTH_PAGE_ROUTE = '/Contacts',
  FIFTH_PAGE_ROUTE = '/Our_team',
  SIXTH_PAGE_ROUTE = '/Services',
  SEVENTH_PAGE_ROUTE = '/About',
  EIGHTH_PAGE_ROUTE = '/FAQ',
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

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
  BLOG_PAGE_ROUTE = '/Blog',
  SOLUTIONS_PAGE_ROUTE = '/Solutions',
  CONTACTS_PAGE_ROUTE = '/Contacts',
  OUR_TEAM_PAGE_ROUTE = '/Our_team',
  SERVICES_PAGE_ROUTE = '/Services',
  ABOUT_PAGE_ROUTE = '/About',
  FAQ_PAGE_ROUTE = '/FAQ',
}

export const headerLinks = [
  {
    name: PAGE.HOME,
    link: PATH.HOME_PAGE_ROUTE,
  },
  {
    name: PAGE.SERVICES,
    link: PATH.SERVICES_PAGE_ROUTE,
  },
  {
    name: PAGE.ABOUT,
    link: PATH.ABOUT_PAGE_ROUTE,
  },
  {
    name: PAGE.BLOG,
    link: PATH.BLOG_PAGE_ROUTE,
  },
  {
    name: PAGE.CONTACTS,
    link: PATH.CONTACTS_PAGE_ROUTE,
  },
  {
    name: PAGE.SOLUTIONS,
    link: PATH.SOLUTIONS_PAGE_ROUTE,
  },
  {
    name: PAGE.OUR_TEAM,
    link: PATH.OUR_TEAM_PAGE_ROUTE,
  },
  {
    name: PAGE.FAQ,
    link: PATH.FAQ_PAGE_ROUTE,
  },
];

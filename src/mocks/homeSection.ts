import { EMPTY_SUFFIX_COUNT, PNG, SVG } from '@/constants';

const { Machine, Data, Embed, Access, ArrowRight } = SVG;
const {
  FirstTestimonialPerson,
  SecondTestimonialPerson,
  ThirdTestimonialPerson,
  FirstImageBlogSection,
  SecondImageBlogSection,
  ThirdImageBlogSection,
} = PNG;

const HomePageSection = {
  HomeFirstSection: {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
    secondText:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  HomeSecondSection: {
    title: 'Radically new solutions for data',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  HomeThirdSection: {
    title: 'We provide services that guarantee your success',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.',
    resultProvideServices: [
      {
        id: '1',
        amount: 1830,
        titleProvide: 'Project executed',
        suffix: '+',
      },
      {
        id: '2',
        amount: 834,
        titleProvide: 'Satisfied customers',
        suffix: '+',
      },
      {
        id: '3',
        amount: 390,
        titleProvide: 'Data management',
        suffix: EMPTY_SUFFIX_COUNT,
      },
    ],
  },
  HomeFourthSection: {
    title: 'The benefits of Ensome',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    benefits: [
      {
        id: '1',
        Img: Machine,
        title: 'Machine learning',
        text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
      },
      {
        id: '2',
        Img: Embed,
        title: 'Embed analytics',
        text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
      },
      {
        id: '3',
        Img: Access,
        title: 'Access control',
        text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
      },
      {
        id: '4',
        Img: Data,
        title: 'Data analytics',
        text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
      },
    ],
  },
  HomeFifthSection: {
    title: 'Testimonials',
    clients: [
      {
        id: '1',
        name: 'Alex Bern',
        position: 'CEO by PixelPerfect',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: FirstTestimonialPerson,
      },
      {
        id: '2',
        name: 'Ruben Chifundo',
        position: 'CEO by NOX',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: SecondTestimonialPerson,
      },
      {
        id: '3',
        name: 'Tigran Nazaret',
        position: 'Data analyst',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: ThirdTestimonialPerson,
      },
      {
        id: '4',
        name: 'Alex Bern',
        position: 'CEO by PixelPerfect',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: FirstTestimonialPerson,
      },
      {
        id: '5',
        name: 'Ruben Chifundo',
        position: 'CEO by NOX',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: SecondTestimonialPerson,
      },
      {
        id: '6',
        name: 'Tigran Nazaret',
        position: 'Data analyst',
        comment:
          '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
        image: ThirdTestimonialPerson,
      },
    ],
  },
  HomeSixthSection: {
    title: 'Our pricing',
    tariffs: [
      {
        id: '1',
        title: 'Free trial',
        price: '00',
        currency: '$',
        term: ['Mo', 'Yr'],
        buttonTitle: 'Choose plan',
        conditions: ['For small teams – 5 users', 'Community support'],
      },
      {
        id: '2',
        title: 'Lite',
        price: '99',
        currency: '$',
        term: ['Mo', 'Yr'],

        buttonTitle: 'Choose plan',
        conditions: [
          'For small teams – 15 users',
          'Individual support',
          'Individual data – 60GB',
        ],
      },
      {
        id: '3',
        title: 'Basic',
        price: '00',
        currency: '$',
        term: ['Mo', 'Yr'],

        buttonTitle: 'Choose plan',
        conditions: [
          'For small teams – 30 users',
          'Community support',
          'Individual data – 12,0GB',
          'Advanced permissions',
        ],
      },
      {
        id: '4',
        title: 'For enterprises',
        price: 'Custom',
        term: ['Mo', 'Yr'],

        buttonTitle: 'Choose plan',
        conditions: [
          'Unlimited team members',
          'Individual support',
          'Unlimited Individual data',
          'Advanced permissions',
          'Data history',
          'Audit log',
          'All functions included',
        ],
      },
    ],
  },
  HomeSeventhSection: {
    title: 'Our blog',
    blogs: [
      {
        id: '1',
        image: FirstImageBlogSection,
        date: '22 June 2022',
        title: 'ISO 13485 compliance of medical devices',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure',
        button: {
          buttonTitle: 'Read more',
          ButtonImage: ArrowRight,
        },
      },
      {
        id: '2',
        image: SecondImageBlogSection,
        date: '22 June 2022',
        title: 'Business analysis helps you  in finance',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure',
        button: {
          buttonTitle: 'Read more',
          ButtonImage: ArrowRight,
        },
      },
      {
        id: '3',
        image: ThirdImageBlogSection,
        date: '22 June 2022',
        title: '5 web portal examples your business can learn from',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure',
        button: {
          buttonTitle: 'Read more',
          ButtonImage: ArrowRight,
        },
      },
      {
        id: '4',
        image: ThirdImageBlogSection,
        date: '22 June 2022',
        title: '5 web portal examples your business can learn from',
        text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure',
        button: {
          buttonTitle: 'Read more',
          ButtonImage: ArrowRight,
        },
      },
    ],
  },
};

export { HomePageSection };

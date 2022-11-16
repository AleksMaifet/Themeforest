import { EMPTY_SUFFIX_COUNT, SVG } from '@/constants';

const { Machine, Data, Embed, Access } = SVG;

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
};

export { HomePageSection };

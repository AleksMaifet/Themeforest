import { EMPTY_SUFFIX_COUNT } from '@/constants';

const HomePageSection = {
  HomeFirstSection: {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi',
  },
  HomeSecondSection: {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  HomeThirdSection: {
    title: 'Radically new solutions for data',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  HomeFourthSection: {
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
};

export { HomePageSection };

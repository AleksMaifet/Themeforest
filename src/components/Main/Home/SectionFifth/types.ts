export interface IFifthSection {
  value: {
    title: string;
    tariffs: {
      id: string;
      title: string;
      price: string;
      currency?: string;
      term: string[];
      buttonTitle: string;
      conditions: string[];
    }[];
  };
}

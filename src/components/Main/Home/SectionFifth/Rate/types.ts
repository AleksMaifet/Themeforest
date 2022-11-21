export interface IRate {
  value: {
    id: string;
    title: string;
    price: string;
    currency?: string;
    term: string[];
    buttonTitle: string;
    conditions: string[];
  };
}

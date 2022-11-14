export interface ISecondaryButton<T> {
  title: string;
  styleOptions?: T;
}

export type StyleOptionsType = {
  color: string;
  backGroundColor: string;
};

export type SecondaryButtonWrapperType<T> = {
  styleOptions?: Partial<T>;
};

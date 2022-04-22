export interface IDataCard {
  id: number;
  title: string;
  price: number;
  count: number | any;
}

export const fetchProducts = (): Promise<Array<IDataCard>> => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        title: "Good tea",
        price: 10,
        count: 13,
      },
      {
        id: 2,
        title: "Good coffee",
        price: 15,
        count: 31,
      },
      {
        id: 3,
        title: "Good milk",
        price: 12,
        count: 7,
      },
    ]);
  });
};

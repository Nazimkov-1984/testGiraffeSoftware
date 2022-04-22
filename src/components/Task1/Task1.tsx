import { useCallback, useEffect, useState } from "react";
import { fetchProducts, IDataCard } from "../../repositoryData/data";
import store from "../../mobX/productStore";
import "./Task1.css";

interface SelectOption {
  value: string;
  key: string;
}

const optionsForSelect: SelectOption[] = [
  { value: "value1", key: "By price" },
  { value: "value2", key: "By count" },
  { value: "value3", key: "Reset filter" },
];

const Task1 = () => {
  const [products, setProducts] = useState<IDataCard[]>([]);

  useEffect(() => {
    fetchProducts().then((res: IDataCard[]) => {
      setProducts(res);
      store.setDataProducts(res);
    });
  }, []);

  const onChangeFilterHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      switch (e.target.value) {
        case "value1": {
          setProducts((prevState) => {
            const newState = [...prevState];
            return newState.sort(
              (a: IDataCard, b: IDataCard) => a.price - b.price
            );
          });
          break;
        }
        case "value2": {
          setProducts((prevState) => {
            const newState = [...prevState];
            return newState.sort(
              (a: IDataCard, b: IDataCard) => a.count - b.count
            );
          });
          break;
        }
        case "value3": {
          const productsFromStore: IDataCard[] = store.dataProducts;
          setProducts(productsFromStore);
        }
      }
    },
    []
  );

  return (
    <div>
      <div className="filter">
        <span className="filterTitle">Filter:</span>
        <select onChange={onChangeFilterHandler} className="selectFilter">
          <option selected disabled>
            Select filter...
          </option>
          {optionsForSelect.map((item: SelectOption, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.key}
              </option>
            );
          })}
        </select>
      </div>

      <div className="containerProducts">
        {products ? (
          products.map((item: IDataCard) => {
            const keys: string[] = Object.keys(item);
            return (
              <div key={item.id} className="gridContainer">
                <span>{`${keys[1]}: ${item.title}`}</span>
                <span>{`${keys[2]}: ${item.price}`}</span>
                <span>{`${keys[3]}: ${item.count}`}</span>
              </div>
            );
          })
        ) : (
          <span>No products!!!</span>
        )}
      </div>
    </div>
  );
};

export default Task1;

import { computed, makeAutoObservable, action } from "mobx";
import { IDataCard } from "../repositoryData/data";

class Store {
  _dataProducts: Array<IDataCard> = [];

  constructor() {
    makeAutoObservable(this, {
      dataProducts: computed,
      setDataProducts: action,
    });
  }

  get dataProducts() {
    return this._dataProducts;
  }

  setDataProducts = (data: Array<IDataCard>) => {
    this._dataProducts = data;
  };
}

export default new Store();

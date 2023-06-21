interface SimpleStateConfig<T = Pack> {
  label: string;
  storeId: string;
  value: T;
  loadingState: "idle" | "pending" | "success" | "error";
  //setters
  updateStore: storeSetterFn<T>; // => takes any key value and re-sets value in store
  updateValue: (value: Value) => void; // => placeholder 'value' key for future storage
  initialize: (store?: SimpleStateConfig<T>) => {
    setStore: storeSetterFn<T>;
  }; //=> call after instantiating store to initialize store loading sequence
  fetcher: (value?: any) => any; //=> gets initial object
}

type storeSetterFn<T> = (value: T extends infer T ? T : any) => void;
type storeValueSetter<T> = (value: infer T) => void;

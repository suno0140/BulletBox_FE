import { legacy_createStore as createStore, Reducer, Store } from 'redux';

import createReducer from '@redux/createReducer';

const initializeStore = (): Store => {
  const store: any = createStore(
    createReducer(),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );

  store.asyncReducers = {};

  store.injectReducer = (key: string, reducer: Reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));

    return store;
  };

  return store;
};

export default initializeStore;

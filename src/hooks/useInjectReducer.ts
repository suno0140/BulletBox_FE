import { useCallback, useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { AnyAction, Reducer } from 'redux';

type TUseInjectReducer = {
  key: string;
  reducer: Reducer<any, AnyAction>;
};

const useInjectReducer = ({ key, reducer }: TUseInjectReducer) => {
  const context: any = useContext(ReactReduxContext);

  const injectReducer = useCallback(() => {
    context.store.injectReducer(key, reducer);
  }, [key, reducer]);

  useEffect(() => {
    injectReducer();
  }, [context.store]);
};

export { useInjectReducer };

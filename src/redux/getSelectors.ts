import { createSelector } from 'reselect';

export default function getSelectors(reduxKey: string): any {
  const selectState = (state: Record<string, unknown>) => state[reduxKey];
  const makeStateSelector = (stateName: string) =>
    createSelector(selectState, (state) => state?.[stateName]);

  return {
    makeParametersSelector: makeStateSelector('parameters'),
    makeDataSelector: makeStateSelector('data'),
    makeRequestLoadingSelector: makeStateSelector('requestLoading'),
    makeRequestSuccessSelector: makeStateSelector('requestSuccess'),
    makeRequestErrorSelector: makeStateSelector('requestError'),
    makeRequestErrorDataSelector: makeStateSelector('requestErrorData'),
  };
}

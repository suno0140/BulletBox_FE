export function getActionTypes(reduxKey: string): any {
  const result = {
    REQUEST_READY: `${reduxKey}/REQUEST_READY`,
    REQUEST_START: `${reduxKey}/REQUEST_START`,
    REQUEST_SUCCESS: `${reduxKey}/REQUEST_SUCCESS`,
    REQUEST_FAIL: `${reduxKey}/REQUEST_FAIL`,
    SET_PARAMETERS: `${reduxKey}/SET_PARAMETERS`,
    SET_DATA: `${reduxKey}/SET_DATA`,
    CLEAR_DATA: `${reduxKey}/CLEAR_DATA`,
  };

  return result;
}

export default function getActionCreators(reduxKey: string): any {
  const {
    REQUEST_READY,
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    SET_PARAMETERS,
    SET_DATA,
    CLEAR_DATA,
  } = getActionTypes(reduxKey);

  return {
    setParameters: (parameters: any) => ({
      type: SET_PARAMETERS,
      ...parameters,
    }),

    setData: (data: any) => ({
      type: SET_DATA,
      data,
    }),

    requestReady: () => ({
      type: REQUEST_READY,
    }),

    requestStart: () => ({
      type: REQUEST_START,
    }),

    requestSuccess: (response: any) => ({
      type: REQUEST_SUCCESS,
      ...response,
    }),

    requestFail: (response: any) => ({
      type: REQUEST_FAIL,
      ...response,
    }),

    clearData: () => ({
      type: CLEAR_DATA,
    }),
  };
}

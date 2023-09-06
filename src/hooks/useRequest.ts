import { errorToast, successToast } from '@components/atoms/toast';
import { useDispatch, useSelector } from 'react-redux';
import getActionCreators from '@redux/getActionCreators';
import { useInjectReducerWithApi } from '@redux/getReducers';
import getSelectors from '@redux/getSelectors';
import { createStructuredSelector } from 'reselect';

type TUseRequestParams = {
  apiFunc: any;
  reduxKey: string;
  successMessage?: string;
  errorMessage?: string;
};

type TUseRequestRes = {
  parameters: any;
  data: any;
  requestLoading: boolean;
  requestSuccess: boolean;
  requestError: any;
  requestErrorData: any;
  request: any;
};

export function useRequest({
  apiFunc,
  reduxKey,
  successMessage,
  errorMessage,
}: TUseRequestParams): TUseRequestRes {
  const {
    makeParametersSelector,
    makeDataSelector,
    makeRequestLoadingSelector,
    makeRequestSuccessSelector,
    makeRequestErrorSelector,
    makeRequestErrorDataSelector,
  } = getSelectors(reduxKey);
  useInjectReducerWithApi(reduxKey);

  const { requestReady: globalRequestReady, requestStart: globalRequestStart } =
    getActionCreators('global');

  const {
    setParameters: setParametersAction,
    requestReady: requestReadyAction,
    requestStart: requestStartAction,
    requestSuccess: requestSuccessAction,
    requestFail: requestFailAction,
  } = getActionCreators(reduxKey);

  const dispatch = useDispatch();

  const {
    data,
    requestLoading,
    requestSuccess,
    requestError,
    requestErrorData,
    parameters,
  } = useSelector(
    createStructuredSelector<any>({
      data: makeDataSelector,
      requestLoading: makeRequestLoadingSelector,
      requestSuccess: makeRequestSuccessSelector,
      requestError: makeRequestErrorSelector,
      requestErrorData: makeRequestErrorDataSelector,
      parameters: makeParametersSelector,
    }),
  );

  const request = async (reqData?: Record<string, unknown>) => {
    dispatch(globalRequestStart());

    try {
      const newParameters = { ...parameters, ...reqData } ?? {};
      dispatch(setParametersAction(newParameters));
      const result = await apiFunc(newParameters);
      if (successMessage) successToast(successMessage);
      dispatch(requestSuccessAction({ data: result }));
    } catch (error) {
      dispatch(requestFailAction({ error }));
      if (errorMessage) errorToast(errorMessage);
    } finally {
      dispatch(globalRequestReady());
    }
  };

  return {
    data,
    requestLoading,
    requestSuccess,
    requestError,
    requestErrorData,
    parameters,
    request,
  };
}

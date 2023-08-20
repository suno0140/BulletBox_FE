import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '@components/atoms/toast';

type UseAuthStatusProps = {
  status?: { success?: boolean };
  successRoute?: string;
  successmessage?: string;
  errormessage?: string;
};

const useStatusCheck = ({
  status,
  successRoute,
  successmessage,
  errormessage,
}: UseAuthStatusProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (status.success) {
      if (successRoute) navigate(successRoute);
      if (successmessage) successToast(successmessage);
    } else if (status?.success == false) {
      if (errormessage) errorToast(errormessage);
    }
  }, [status]);
};

export default useStatusCheck;

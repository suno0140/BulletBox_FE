import { errorToast, successToast } from '@components/atoms/toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type UseAuthStatusProps = {
  status?: { success?: boolean };
  successRoute?: string;
  successmessage?: string;
  errormessage?: string;
};

const useAuthStatusCheck = ({
  status,
  successRoute,
  successmessage,
  errormessage,
}: UseAuthStatusProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (status.success) {
      navigate(successRoute);
      successToast(successmessage);
    } else if (status.success == false) {
      errorToast(errormessage);
    }
  }, [status]);
};

export default useAuthStatusCheck;

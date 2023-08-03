import toast from 'react-hot-toast';

export const useDefaultToast = (message: string) => {
  toast(message, { duration: 2000, style: { fontSize: '14px' } });
};

export const useSuccessToast = (message: string) => {
  toast.success(message, { duration: 2000, style: { fontSize: '14px' } });
};

export const useErrorToast = (message: string) => {
  toast.error(message, { duration: 2000, style: { fontSize: '14px' } });
};

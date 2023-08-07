import toast from 'react-hot-toast';

export const defaultToast = (message: string) => {
  toast(message, { duration: 2000, style: { fontSize: '14px' } });
};

export const successToast = (message: string) => {
  toast.success(message, { duration: 2000, style: { fontSize: '14px' } });
};

export const errorToast = (message: string) => {
  toast.error(message, { duration: 2000, style: { fontSize: '14px' } });
};

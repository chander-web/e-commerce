import { toast } from 'react-toastify';

export const successMsg = (msg) => {
  toast.success(msg);
};

export const errorMsg = (msg) => {
  toast.error(msg);
};

export const warnMsg = (msg) => {
  toast.warn(msg);
};

export const infoMsg = (msg) => {
  toast.info(msg);
};
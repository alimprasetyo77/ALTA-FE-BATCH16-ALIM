import { ToastPosition, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const successToast = (msg: string, position?: ToastPosition) => {
  toast.success(msg, {
    position: position ?? "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const errorToast = (msg: string) => {
  toast.error(msg, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export { successToast, errorToast }
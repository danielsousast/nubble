import React, {createContext, useContext, useState} from 'react';
import {ToastType} from './toastTypes';

interface ToastService {
  toast: ToastType | null;
  showToast: (toast: ToastType) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: ToastType) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext(): ToastService['toast'] {
  const {toast} = useContext(ToastContext);
  return toast;
}

export function useToastContextAction(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const {showToast, hideToast} = useContext(ToastContext);
  return {showToast, hideToast};
}

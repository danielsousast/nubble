import {ToastService} from './toastTypes';
import {useToastContext, useToastContextAction} from './useToastContext';
import {useToastZustand, useToastZustandAction} from './useToastZustand';

type ToastHookType = 'zustand' | 'context';

export function useToast(
  type: ToastHookType = 'zustand',
): ToastService['toast'] {
  const useHook = type === 'context' ? useToastContext : useToastZustand;
  return useHook();
}

export function useToastAction(
  type: ToastHookType = 'zustand',
): Pick<ToastService, 'showToast' | 'hideToast'> {
  const useHook =
    type === 'context' ? useToastContextAction : useToastZustandAction;

  return useHook();
}

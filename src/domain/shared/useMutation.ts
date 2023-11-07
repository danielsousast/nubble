import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    console.log('mutate', options);
    try {
      setLoading(true);
      setError(null);
      const response = await mutationFn(variables);
      if (options?.onSuccess) {
        console.log('onSuccess');
        options.onSuccess(response);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}

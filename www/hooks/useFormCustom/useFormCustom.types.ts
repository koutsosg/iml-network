export type UseFormProps<T> = {
  initialData: T;
  mutation: any;
  onSuccessMessage?: string;
  onErrorMessage?: string;
  fields?: {
    [key: string]: (value: string) => any;
  };
};

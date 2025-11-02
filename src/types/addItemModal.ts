export type AddItemField = {
  name: string;
  label: string;
  type: "text" | "number" | "date";
  required?: boolean;
};

export type AddItemModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, unknown>) => Promise<void> | void;
  fields: AddItemField[];
  title?: string;
  loading?: boolean;
  error?: string | null;
  submitLabel?: string;
};

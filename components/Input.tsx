import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  props?: any
}

export default function Input(props: InputProps): JSX.Element {
  return (
    <input {...props}
      className="border rounded px-3 py-1 w-80"
    />
  );
}

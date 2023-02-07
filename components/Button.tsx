
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any
  props?: any
}

export default function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button {...props}
      className="bg-yellow-700 text-gray-100 rounded px-4 py-2 my-2 hover:bg-yellow-800">
      {children}
    </button>

  )
}
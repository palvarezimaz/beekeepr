import { PropsWithChildren } from "react"

interface FieldProps extends PropsWithChildren {
  label: string
}

export default function Field({ label, children }: FieldProps): JSX.Element {
  return (
    <label>
      <span>{label}
      </span>
      {children}
    </label>
  )
}


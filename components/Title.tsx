import { PropsWithChildren } from "react"

export default function Title({ children }: PropsWithChildren): JSX.Element {
  return (
    <h1 className="text-2xl pb-4" >
      {children}
    </h1>
  )
}

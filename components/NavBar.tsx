import Link from "next/link"
import { useUser, useSignOut } from "../hooks/user"


export default function NavBar(): JSX.Element {
  const user = useUser()
  const signOut = useSignOut()


  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">
            {`Beekeeper's Journal`}
          </Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>
              {user.name}
            </li>
            <li>
              <button onClick={signOut}>Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">
              Sign in
            </Link>
          </li>)}

      </ul>
    </nav >
  )
}

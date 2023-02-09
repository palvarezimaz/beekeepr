import Link from "next/link"
import { useEffect, useState } from "react"
import { fetchJson } from "../lib/api"


export default function NavBar(): JSX.Element {
  const [user, setUser] = useState()
  useEffect(() => {
    (async () => {
      try {
        const user = await
          fetchJson('api/user')
        setUser(user)
      } catch (err) {
        // not signed in
      }
    })()
  }, [])

  const handleSignOut = async () => {
    fetchJson('/api/logout')
    setUser(undefined)
    // TODO redirect to main

  }

  console.log('[navBar user', user)
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
              <button onClick={handleSignOut}>Sign out</button>
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

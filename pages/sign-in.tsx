import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field"
import Button from "../components/Button";
import { useState, FormEventHandler } from 'react'
import { useRouter } from "next/router";
import { fetchJson } from "../lib/api";


function SignInPage(): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ loading: false, error: false })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: false })
    try {
      console.log(`submitted ${email}, ${password}`)
      const response = await fetchJson(`/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      setStatus({ loading: false, error: false })
      console.log('sign in', response)
      router.push('/')
    } catch (err) {
      setStatus({ loading: false, error: true })
    }
  };
  return (
    <Page title="Sign in">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Field>
        <p>
          {status.error && (<p className="text-red-700"> Invalid Credentials</p>)}
        </p>
        {status.loading ? (
          <>
            <Button>Loading...</Button></>
        ) : <Button type="submit">Sign in</Button>}

      </form>
    </Page>
  );
}

export default SignInPage
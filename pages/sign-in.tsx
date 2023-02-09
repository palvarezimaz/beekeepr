import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field"
import Button from "../components/Button";
import { useState, FormEventHandler } from 'react'
import { useRouter } from "next/router";
import { useSignIn } from '../hooks/user'


function SignInPage(): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signInError, signInLoading } = useSignIn()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password)
    if (valid) {
      router.push('/')
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
          {signInError && (<p className="text-red-700"> Invalid Credentials</p>)}
        </p>
        {signInLoading ? (
          <>
            <Button>Loading...</Button></>
        ) : <Button type="submit">Sign in</Button>}

      </form>
    </Page>
  );
}

export default SignInPage
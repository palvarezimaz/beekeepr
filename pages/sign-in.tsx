import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field"
import Button from "../components/Button";


function SignInPage(): JSX.Element {
  return (
    <Page title="Sign in">
      <form action="">
        <Field label="Email">
          Email
          <Input type="email" />
        </Field>
        <Field label="Password">
          Password
        </Field>
        <Input type="password" />
        <Button type="submit">Sign in</Button>
      </form>
    </Page>
  );
}

export default SignInPage
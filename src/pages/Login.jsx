import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LogoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Login() {
  return (
    <LoginLayout>
      <LogoLayout>
        <Logo type="login" />
        <Heading as="h4">Log in to your account</Heading>
      </LogoLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;

import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";
import { useLogin } from "../features/authentication/useLogin";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  //1. Load the authenticated user
  const { isLoading } = useLogin();

  //2. If there is no authenticated user, redirect to the /login
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  //3. While that is happening show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there is a user render the app
  if (token) return children;
}

export default ProtectedRoute;

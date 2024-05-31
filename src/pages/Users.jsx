import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function Users() {
  return (
    <>
      <Heading as="h1">Create a New User</Heading>
      <SignupForm />
    </>
  );
}

export default Users;

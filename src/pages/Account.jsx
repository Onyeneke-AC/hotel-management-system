import EditPasswordForm from "../features/authentication/EditPasswordForm";
import EditUserDataForm from "../features/authentication/EditUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update Account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <EditUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <EditPasswordForm />
      </Row>
    </>
  );
}

export default Account;

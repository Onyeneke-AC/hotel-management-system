import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// import { useUser } from "./useUser";
// import { useUpdateUser } from "./useUpdateUser";

function EditUserDataForm() {
  //   const {
  //     user: {
  //       email,
  //       user_metadata: { fullName: currentFullName },
  //     },
  //   } = useUser();

  //   const { updateUser, isUpdating } = useUpdateUser();

  //   const [fullName, setFullName] = useState(currentFullName);
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const email = "hfeh@hfb.com";

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    // updateUser(
    //   { fullName },
    //   {
    //     onSuccess: () => {
    //       e.target.reset();
    //     },
    //   }
    // );
  }

  function handleCancel() {
    setFullName(fullName);
    setPhone(phone);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          //   disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Phone">
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          //   disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          //   disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default EditUserDataForm;

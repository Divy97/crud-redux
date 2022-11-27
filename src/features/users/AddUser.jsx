import Button from "../../components/Button";

const AddUser = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      {/* <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      /> */}
      <Button>Submit</Button>
    </div>
  );
};

export default AddUser;

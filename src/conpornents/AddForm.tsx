import { Form, FormGroup, Label, Input, Button} from "reactstrap";
const AddForm= () => {
    return (
        <Form>
  <FormGroup>
    <Label for="exampleName">
      氏名
    </Label>
    <Input
      id="exampleName"
      name="Name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleNunber">
      電話番号
    </Label>
    <Input
      id="exampleNunber"
      name="Nunber"
      type="tel"
    />
  </FormGroup>

  <Button>
    確定
  </Button>
</Form>
    )
};

export default AddForm;
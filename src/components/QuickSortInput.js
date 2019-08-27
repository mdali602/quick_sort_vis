import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const QuickSortInput = ({ size, cs_arr, err_msg, handleChange, handleSubmit }) => {
  return (

    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="size"> Size: </Label>
        <Input type="number" name="size" id="size" value={size} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Label for="cs_arr"> Array (csv; eg: 76,84,39): </Label>
        <Input type="textarea" name="cs_arr" id="cs_arr" value={cs_arr} onChange={handleChange} />
      </FormGroup>
      <p style={{color: '#f00'}}>{err_msg}</p>
      {/* <input value="Submit" /> */}

      <Button type="submit">Submit</Button>
    </Form>

  )
}

export default QuickSortInput;
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default function ContactForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Plain Text (Static)</Label>
                <Input plaintext value="Some plain text/ static value" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">Number</Label>
                <Input
                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="number placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="radio" /> Option one is this and that—be sure to
            include why it's great
          </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Check me out
          </Label>
            </FormGroup>
        </Form>
    );
}


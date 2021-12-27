import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL_GROUPS } from "../../constants";

class NewGroupForm extends React.Component {
state = {
    pk: 0,
    title: "",
    description: "",
    };

componentDidMount() {
    if (this.props.group) {
        const { pk, title, description} = this.props.group;
        this.setState({ pk, title, description});
    }
    }

onChange = e => {
    this.setState({ [e.target.title]: e.target.value });
};

createGroup = e => {
    e.preventDefault();
    axios.post(API_URL_GROUPS, this.state).then(() => {
    this.props.resetState();
    this.props.toggle();
    });
};

editGroup = e => {
    e.preventDefault();
    axios.put(API_URL_GROUPS + this.state.pk + '/', this.state).then(() => {
    this.props.resetState();
    this.props.toggle();
    });
};

defaultIfEmpty = value => {
    return value === "" ? "" : value;
};

render() {
    return (
    <Form onSubmit={this.props.group ? this.editGroup : this.createGroup}>
        <FormGroup>
        <Label for="title">Title:</Label>
        <Input
            type="text"
            title="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
        />
        </FormGroup>
        <FormGroup>
        <Label for="description">Description:</Label>
        <Input
            type="text"
            title="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
        />
        </FormGroup>
        <Button>Send</Button>
    </Form>
    );
}
}

export default NewGroupForm;
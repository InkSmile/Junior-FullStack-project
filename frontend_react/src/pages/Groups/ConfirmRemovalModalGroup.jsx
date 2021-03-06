import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { API_URL_GROUPS } from "../../constants";

class ConfirmRemovalModalGroup extends Component {
state = {
    modal: false
};

toggle = () => {
    this.setState(previous => ({
    modal: !previous.modal
    }));
};

deleteGroup = pk => {
    axios.delete(API_URL_GROUPS + pk).then(() => {
    this.props.resetState();
    this.toggle();
    });
};

render() {
    return (
    <Fragment>
        <Button color="danger" onClick={() => this.toggle()}>
        Delete
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>
            Do you really wanna delete the group?
        </ModalHeader>

        <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
            Cancel
            </Button>
            <Button
            type="button"
            color="primary"
            onClick={() => this.deleteGroup(this.props.pk)}
            >
            Yes
            </Button>
        </ModalFooter>
        </Modal>
    </Fragment>
    );
}
}

export default ConfirmRemovalModalGroup;
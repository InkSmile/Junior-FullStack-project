import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import GroupList from "./GroupList";
import NewGroupModal from "./NewGroupModal";

import axios from "axios";

import { API_URL_GROUPS } from "../../constants";

class HomeGroup extends Component {
state = {
    groups: []
};

componentDidMount() {
    this.resetState();
}

getUsers = () => {
    axios.get(API_URL_GROUPS).then(res => this.setState({ groups: res.data }));
};

resetState = () => {
    this.getUsers();
};

render() {
    return (
    <Container style={{ marginTop: "20px" }}>
        <Row>
        <Col>
            <GroupList
            groups={this.state.groups}
            resetState={this.resetState}
            />
        </Col>
        </Row>
        <Row>
        <Col>
            <NewGroupModal create={true} resetState={this.resetState} />
        </Col>
        </Row>
    </Container>
    );
}
}

export default HomeGroup;
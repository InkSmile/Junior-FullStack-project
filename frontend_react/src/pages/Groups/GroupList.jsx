import { Table } from "reactstrap";
import NewGroupModal from "./NewGroupModal";
import React, { Component } from "react";
import ConfirmRemovalModalGroup from "./ConfirmRemovalModalGroup";

class GroupList extends Component {
render() {
    const groups = this.props.groups;
    return (
    <Table dark>
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {!groups || groups.length <= 0 ? (
            <tr>
            <td colSpan="6" align="center">
                <b>No one here yet</b>
            </td>
            </tr>
        ) : (
            groups.map(group => (
            <tr key={group.pk}>
                <td>{group.title}</td>
                <td>{group.description}</td>
                <td align="center">
                <NewGroupModal
                    create={false}
                    group={group}
                    resetState={this.props.resetState}
                />
                &nbsp;&nbsp;
                <ConfirmRemovalModalGroup
                    pk={group.pk}
                    resetState={this.props.resetState}
                />
                </td>
            </tr>
            ))
        )}
        </tbody>
    </Table>
    );
}
}

export default GroupList;
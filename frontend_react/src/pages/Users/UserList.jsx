import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";
import React, { Component } from "react";
import ConfirmRemovalModal from "./ConfirmRemovalModal";



class UserList extends Component {
render() {
    const users = this.props.users;
    return (
    <Table dark>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Group</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {!users || users.length <= 0 ? (
            <tr>
            <td colSpan="6" align="center">
                <b>No one here yet</b>
            </td>
            </tr>
        ) : (
            users.map(user => (
            <tr key={user.pk}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
                <td>{user.group}</td>
                <td align="center">
                <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                />
                &nbsp;&nbsp;
                <ConfirmRemovalModal
                    pk={user.pk}
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

export default UserList;
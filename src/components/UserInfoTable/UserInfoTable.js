import React, { useContext } from 'react';
import { UsersContext } from '../Main/Main';
import User from './User';
import "./UserInfoTable.css";

const UserInfoTable = () => {
    const [users, setUsers] = useContext(UsersContext);
    return (
        <div className="container">
            <h3 class='title'>Users information</h3>
            <div className="header-row">
                <div className="col header">Name</div>
                <div className="col header">Phone</div>
                <div className="col header">Action</div>
            </div>
            <div className='row-container'>
                {
                    users?.map((user, index) => <User
                        key={index}
                        user={user}
                    />)
                }
            </div>
        </div>
    );
};

export default UserInfoTable;
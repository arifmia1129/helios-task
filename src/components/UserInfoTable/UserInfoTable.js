import React from 'react';
import useUser from '../../hooks/useUser';
import User from './User';
import "./UserInfoTable.css";

const UserInfoTable = () => {
    const [users] = useUser();
    return (
        <div className="container">
            <h3 id='title'>Users information</h3>
            <div className="row">
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
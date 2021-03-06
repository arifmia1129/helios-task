import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { storedDetails } from '../utilities/fakeDB';
import "./UserDetail.css";
const UserDetail = () => {
    const navigate = useNavigate();
    const users = storedDetails();
    const { phone } = useParams();
    const user = users?.find(u => u.phone === phone);
    return (
        <div>
            <p onClick={() => navigate("/")} style={{ marginLeft: "20px", cursor: "pointer" }}>Home</p>
            <h3 className='title'>User Details</h3>
            <div id='user'>
                <p><span className='point'>User name:</span> {user?.name}</p>
                <p><span className='point'>User phone:</span> {user?.phone}</p>
            </div>
        </div>
    );
};

export default UserDetail;
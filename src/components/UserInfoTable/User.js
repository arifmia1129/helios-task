import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./User.css";

const User = ({ user }) => {
    const navigate = useNavigate();
    const { name, phone } = user;
    const handleDetail = () => {
        navigate(`detail/${phone}`)
    }
    return (
        <div class="row">
            <div class="col">{name}</div>
            <div class="col">{phone}</div>
            <div id='btn' onClick={handleDetail} class="col">Detail</div>
        </div>
    );
};

export default User;
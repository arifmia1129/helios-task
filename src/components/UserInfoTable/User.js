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
        <div className="row">
            <div className="col">{name}</div>
            <div className="col">{phone}</div>
            <div id='btn' onClick={handleDetail} className="col">Detail</div>
        </div>
    );
};

export default User;
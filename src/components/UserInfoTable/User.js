import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./User.css";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { TbDetails } from 'react-icons/tb';

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
            <div id='btn' className="col">
                <AiFillEdit className='icon' />
                <MdDelete className='icon' />
                <TbDetails onClick={handleDetail} className='icon' />
            </div>
        </div>
    );
};

export default User;
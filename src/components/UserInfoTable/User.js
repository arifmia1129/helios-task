import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./User.css";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { TbDetails } from 'react-icons/tb';
import { storedDetails, updateDb } from '../utilities/fakeDB';

const User = ({ user, setUsers }) => {
    const [editStatus, setEditStatus] = useState(false);
    const nameRef = useRef();
    const navigate = useNavigate();
    const { name, phone } = user;
    const handleDetail = () => {
        navigate(`detail/${phone}`)
    }
    const handleEditStatus = () => {
        setEditStatus(true);
    }
    const handleEdit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        updateDb(phone, name);
        setUsers(storedDetails());
        setEditStatus(false);
    }
    return (
        <div className="row">
            {
                !editStatus && <div className="col">{name}</div>
            }
            {
                editStatus && <form className='editForm' onSubmit={handleEdit}>
                    <input ref={nameRef} type="text" defaultValue={name} />
                    <input type="submit" value="save" />
                </form>
            }
            <div className="col">{phone}</div>
            <div id='btn' className="col">
                <AiFillEdit onClick={handleEditStatus} className='icon' />
                <MdDelete className='icon' />
                <TbDetails onClick={handleDetail} className='icon' />
            </div>
        </div>
    );
};

export default User;
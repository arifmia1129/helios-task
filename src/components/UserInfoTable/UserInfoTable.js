import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Main/Main';
import User from './User';
import "./UserInfoTable.css";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
const UserInfoTable = () => {
    const [users, setUsers] = useContext(UsersContext);
    const [allUser, setAllUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const totalPage = Math.ceil(users.length / 5);
        if (totalPage > currentPage) {
            setAllUser(users.slice(currentPage * 5, (5 * (currentPage + 1))));
        }
        else {
            setCurrentPage(0);
        }
    }, [currentPage, users])
    const handleIncreasePage = () => {
        setCurrentPage(currentPage + 1);
    }
    const handleDecreasePage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div className="container">
            <h3 className='title'>Users information</h3>
            <div className="header-row">
                <div className="col header">Name</div>
                <div className="col header">Phone</div>
                <div className="col header">Action</div>
            </div>
            <div className='row-container'>
                {
                    allUser?.map((user, index) => <User
                        key={index}
                        user={user}
                        setUsers={setUsers}
                        setAllUser={setAllUser}
                    />)
                }
            </div>
            <div className='footer'>
                <div>{(currentPage * 5) + 1}-{5 * (currentPage + 1)} of {users?.length}</div>
                <div>
                    <div className=''>
                        <button className='footer-icon' onClick={handleDecreasePage}>
                            <MdOutlineKeyboardArrowLeft />
                        </button>
                        <button className='footer-icon' onClick={handleIncreasePage}>
                            <MdOutlineKeyboardArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoTable;
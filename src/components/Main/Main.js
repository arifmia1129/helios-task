import React, { createContext, useEffect, useState } from 'react';
import UserForm from '../UserForm/UserForm';
import UserInfoTable from '../UserInfoTable/UserInfoTable';
import { storedDetails } from '../utilities/fakeDB';

export const UsersContext = createContext();

const Main = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(storedDetails());
    }, [])
    return (
        <div>
            <UsersContext.Provider value={[users, setUsers]}>
                <UserForm />
                <UserInfoTable />
            </UsersContext.Provider>
        </div>
    );
};

export default Main;
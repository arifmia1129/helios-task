import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Main/Main';
import { addDb, storedDetails } from '../utilities/fakeDB';
import "./UserForm.css";
const UserForm = () => {
    const [users, setUsers] = useContext(UsersContext);
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [user, setUser] = useState();
    const handleUserInfo = e => {
        e.preventDefault();
        setError("");
        setSuccessMsg("");
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        if (/^\+?(8801)[3456789][0-9]{8}$/.test(phone)) {
            const user = { name, phone };
            setUser(user);
            e.target.reset();
            setSuccessMsg("Your information successfully saved!")
        }
        else {
            setError("Invalid phone number. Please try with country code.")
        }
    }
    useEffect(() => {
        if (user) {
            addDb(user);
            setUsers(storedDetails())
        }
    }, [user, setUsers])
    return (
        <div>
            <form onSubmit={handleUserInfo}>
                <h3 class='title'>User Info Collect Form</h3>
                <label htmlFor="fname">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." />
                <label htmlFor="lname">Phone number</label>
                <input type="text" id="phone" name="phone" placeholder="Your phone number.." />
                <p id='error-msg'><small>{error && error}</small></p>
                <p id='success-msg'><small>{successMsg && successMsg}</small></p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UserForm;
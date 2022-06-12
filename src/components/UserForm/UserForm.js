import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Main/Main';
import { addDb, storedDetails } from '../utilities/fakeDB';
import "./UserForm.css";
const UserForm = () => {
    const [users, setUsers] = useContext(UsersContext);
    const [pError, setPError] = useState("");
    const [pSuccess, setPSuccess] = useState("");
    const [nError, setNError] = useState("");
    const [nSuccess, setNSuccess] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [user, setUser] = useState();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);
    const [validName, setValidName] = useState(false);

    useEffect(() => {
        setError("");
        setSuccessMsg("");
        if (phone.length === 0) {
            setPSuccess("");
            setPError("Empty field.")
        }
        else if (!(/^\+?(8801)[3456789][0-9]{8}$/.test(phone))) {
            setPSuccess("");
            setPError("Invalid phone number. Please try with country code.")
        }
        else {
            setValidPhone(true);
            setPError("");
            setPSuccess("Valid phone number.");
        }
    }, [phone])
    useEffect(() => {
        setError("");
        setSuccessMsg("");
        if (name.length === 0) {
            setNSuccess("");
            setNError("Empty field.")
        }
        else if ((name.length > 30)) {
            setNSuccess("");
            setNError("Max length is 30 character.")
        }
        else {
            setValidName(true);
            setNError("");
            setNSuccess("Valid Name");
        }
    }, [name])
    const handleUserInfo = e => {
        e.preventDefault();
        setError("");
        setSuccessMsg("");
        if (validName && validPhone) {
            const existUser = users.find(u => u.phone === phone);
            if (!existUser) {
                const user = { name, phone };
                setUser(user);
                e.target.reset();
                setSuccessMsg("Your information successfully saved!")
            }
            else {
                setError("This phone number already added. Please try with another phone number.")
            }
        }
        else {
            setError("Name or Phone field is empty or invalid.")
        }
        setPError("");
        setNError("");
        setPSuccess("");
        setNSuccess("");
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
                <h3 className='title'>User Info Collect Form</h3>
                <label htmlFor="fname">Name</label>
                <input onChange={(e) => setName(e?.target?.value)} type="text" id="name" name="name" placeholder="Your name.." />
                <p id='error-msg'><small>{nError && nError}</small></p>
                <p id='success-msg'><small>{nSuccess && nSuccess}</small></p>
                <label htmlFor="lname">Phone number</label>
                <input onChange={(e) => setPhone(e?.target?.value)} type="text" id="phone" name="phone" placeholder="Your phone number.." />
                <p id='error-msg'><small>{pError && pError}</small></p>
                <p id='success-msg'><small>{pSuccess && pSuccess}</small></p>
                <p id='error-msg'><small>{error && error}</small></p>
                <p id='success-msg'><small>{successMsg && successMsg}</small></p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UserForm;
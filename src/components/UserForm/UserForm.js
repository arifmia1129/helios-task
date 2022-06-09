import React from 'react';
import "./UserForm.css";
const UserForm = () => {
    return (
        <div>
            <form>
                <h3 id='form-title'>User Info Collect Form</h3>
                <label for="fname">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.." />

                <label for="lname">Phone number</label>
                <input type="text" id="phone" name="phone" placeholder="Your phone number.." />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UserForm;
import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e);
        if(e.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e);
        if(e.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e);
        if(e.length < 1) {
            setEmailError("Email is required!");
        } else if(e.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e);    
        if(e.length === 0) {
            setPasswordError("Password is required!");
        } else if(e.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e);
        if(e !== password){
            setConfirmPasswordError("Passwords don't match!");
        }
        else{
            setConfirmPasswordError("");
        }
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => handleFirstName(e.target.value) } value={firstname}/>
                    {   firstNameError ? <p>{ firstNameError }</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => handleLastName(e.target.value) } value={lastname} />
                    {   lastNameError ? <p>{ lastNameError }</p> : '' }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => handleEmail(e.target.value) } value={email}/>
                    {   emailError ? <p>{ emailError }</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => handlePassword(e.target.value) } value={password}/>
                    {   passwordError ? <p>{ passwordError }</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => handleConfirmPassword(e.target.value) } value={confirmpassword}/>
                    {   confirmPasswordError ? <p>{ confirmPasswordError }</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
        );
};
    
export default UserForm;

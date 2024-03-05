import React, { useState } from "react";

const Extera = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')

    const handleFname = (event) => {
        setFname(event.target.value);
    }
    const handleLname = (event) => {
        setLname(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleDob = (event) => {
        setDob(event.target.value);
    }

    const handleData = (event) => {
        event.preventDefault();

        // Create an object containing user data
        const userData = {
            fname: fname,
            lname: lname,
            email: email,
            dob: dob
        };

        // Convert the user data object to JSON format
        const jsonData = JSON.stringify(userData);

        // Log the JSON data to the console
        console.log(jsonData);

        // You can further process or send the JSON data as needed
    };
    return (
        <form action="" onSubmit={handleData}>
            <span>First Name : </span>
            <input
                type="text"
                name="firstname"
                value={fname}
                onChange={handleFname}
                placeholder="enter first name"
                className="border border-2 border-[#000] ml-10"
            />
            <br />
            <br />
            <span>Last Name : </span>
            <input
                type="text"
                name="lastname"
                value={lname}
                onChange={handleLname}
                placeholder="enter last name"
                className="border border-2 border-[#000] ml-10"
            />
            <br />
            <br />
            <span>Email : </span>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                placeholder="enter email"
                className="border border-2 border-[#000] ml-10"
            />
            <br />
            <br />
            <span>Date of Birth : </span>
            <input
                type="date"
                name="dob"
                value={dob}
                onChange={handleDob}
                placeholder="enter date of birth"
                className="border border-2 border-[#000] ml-10"
            />
            <br />
            <br />
            <button type="submit" className="bg-green-800 p-3">
                Submit
            </button>
        </form>
    );
};

export default Extera;

import React, { useEffect, useState } from "react";

const UserForm = ({ handleUserData, update, updateHandler }) => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    id: ""
  });

  const handleChnage = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser({ ...user, [name]: val })
  }

  const handleData = (event) => {
    event.preventDefault();
    // console.log("user", user)
    if (user.id) {
      updateHandler(user)
    } else {
      handleUserData(user);
    }
    hendleClear();
  }

  const hendleClear = () => {
    setUser({
      fname: '',
      lname: '',
      email: '',
      dob: ''
    })
  }

  useEffect(() => {
    setUser(update);
    // console.log(update);
  }, [update]);

  return (
    <form action="" onSubmit={handleData}>
      <span>First Name : </span>
      <input
        type="text"
        name="fname"
        value={user?.fname}
        onChange={handleChnage}
        placeholder="enter first name"
        className="border border-2 border-[#000] ml-10"
        required
      />
      <br />
      <br />
      <span>Last Name : </span>
      <input
        type="text"
        name="lname"
        value={user?.lname}
        onChange={handleChnage}
        placeholder="enter last name"
        className="border border-2 border-[#000] ml-10"
        required
      />
      <br />
      <br />
      <span>Email : </span>
      <input
        type="email"
        name="email"
        value={user?.email}
        onChange={handleChnage}
        placeholder="enter email"
        className="border border-2 border-[#000] ml-10"
        required
      />
      <br />
      <br />
      <span>Date of Birth : </span>
      <input
        type="date"
        name="dob"
        value={user?.dob}
        onChange={handleChnage}
        placeholder="enter date of birth"
        className="border border-2 border-[#000] ml-10"
        required
      />
      <br />
      <br />
      <div className="flex gap-5 items-center">
        <button
          type="submit"
          className="bg-green-800 px-3 py-1 text-white rounded-md"
        >
          Submit
        </button>
        <button
          type="reset"
          value="reset"
          onClick={hendleClear}
          className="bg-red-800 px-3 py-1 text-white rounded-md"
        >
          Clear
        </button>
        {/* {(user == "") ? (
          <button
            type="submit"
            className="bg-green-800 px-3 py-1 text-white rounded-md"
          >
            Submit
          </button>
        ) : (
        <button
          type="submit"
          className="bg-green-800 px-3 py-1 text-white rounded-md"
        >
          Update
        </button>
        <button
          type="reset"
          value="reset"
          onClick={hendleClear}
          className="bg-red-800 px-3 py-1 text-white rounded-md"
        >
          Clear
        </button>
        )} */}

      </div>
    </form>
  );
};

export default UserForm;

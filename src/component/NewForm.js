import React from 'react'

const NewForm = () => {
    function handleData(event) {
        event.preventDefault();
        const myObj = [
            { firstname: event.target.firstname.value },
            { lastname: event.target.lastname.value },
            { email: event.target.email.value },
            { dob: event.target.dob.value },
        ];
        const data = JSON.stringify(myObj);
        console.log(data);
        // console.log(event.target.firstname.value)
        // console.log(event.target.lastname.value)
        // console.log(event.target.email.value)
        // console.log(event.target.dob.value)
    }
  return (
      <div>
          <form action="" onSubmit={handleData}>
              <span>First Name : </span>
              <input
                  type="text"
                  name="firstname"
                  placeholder="enter first name"
                  className="border border-2 border-[#000] ml-10"
              />
              <br />
              <br />
              <span>Last Name : </span>
              <input
                  type="text"
                  name="lastname"
                  placeholder="enter last name"
                  className="border border-2 border-[#000] ml-10"
              />
              <br />
              <br />
              <span>Email : </span>
              <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="border border-2 border-[#000] ml-10"
              />
              <br />
              <br />
              <span>Date of Birth : </span>
              <input
                  type="date"
                  name="dob"
                  placeholder="enter date of birth"
                  className="border border-2 border-[#000] ml-10"
              />
              <br />
              <br />
              <button type="submit" className="bg-green-800 p-3">
                  Submit
              </button>
          </form>
      </div>
  )
}

export default NewForm

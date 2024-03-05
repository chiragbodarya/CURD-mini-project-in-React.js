import React from 'react'


const UserTable = (props) => {

  const formData = (props.showFormData)
  // console.log('form data',formData);

  return (
    <div>
      {props.myObj}
      <table className="table-auto  border-2 ">
        <thead className='bg-gray-200'>
          <tr >
            <th className='border border-black px-3'>#</th>
            <th className='border border-black px-3'>ID</th>
            <th className='border border-black px-3'>First Name</th>
            <th className='border border-black px-3'>Last Name</th>
            <th className='border border-black px-3'>Email</th>
            <th className='border border-black px-3'>DOB</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => {
            return (
              <tr key={index} >
                <td className='border border-sky-500 px-5'>{index + 1}</td>
                <td className='border border-sky-500 px-5'>{item.id}</td>
                <td className='border border-sky-500 px-5'>{item.fname}</td>
                <td className='border border-sky-500 px-5'>{item.lname}</td>
                <td className='border border-sky-500 px-5'>{item.email}</td>
                <td className='border border-sky-500 px-5'>{item.dob}</td>
                <td className='border border-sky-500 px-5'><button className='bg-green-600 rounded-md px-3 py-0.5' onClick={() => props.handleEdit(index)}>Edit</button></td>
                <td className='border border-sky-500 px-5'><button className='bg-red-600 rounded-md px-3 py-0.5' onClick={() => props.handleDelete(index)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  )
}

export default UserTable

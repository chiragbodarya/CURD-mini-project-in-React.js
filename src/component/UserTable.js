import React, { useState } from 'react'

const UserTable = (props) => {

  const formData = (props.showFormData)

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = formData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(formData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  const [search, setSearch] = useState('');
  const currentRecords = formData
    .filter((item) => {
      return search === '' || item.fname.toLowerCase().includes(search.toLowerCase());
    })
    .slice(firstIndex, lastIndex);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const changeCPage = (id) => {
    setCurrentPage(id)
  }

  return (
    <>
      <div>
        <div className="font-sans text-black w-[100%] pb-4 px-5 bg-white flex items-center justify-center">
          <div className="border border-[#000] rounded overflow-hidden w-[100%]">
            <input
              type="text"
              className="px-4 py-2 w-[100%]"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            // onChange={(e) => onSerach(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between h-full'>
        <table className="table-auto  border-2 ">
          <thead className='bg-gray-200'>
            <tr >
              <th className='border border-black px-3'>#</th>
              {/* <th className='border border-black px-3'>ID</th> */}
              <th className='border border-black px-3'>First Name</th>
              <th className='border border-black px-3'>Last Name</th>
              <th className='border border-black px-3'>Email</th>
              <th className='border border-black px-3'>DOB</th>
              <th className='border border-black px-3 col-span-2'>functionality</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords
              .filter(item => search === '' || item.fname.toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='border border-sky-500 px-5'>{firstIndex + index + 1}</td>
                    {/* <td className='border border-sky-500 px-5'>{item.id}</td> */}
                    <td className='border border-sky-500 px-5'>{item.fname}</td>
                    <td className='border border-sky-500 px-5'>{item.lname}</td>
                    <td className='border border-sky-500 px-5'>{item.email}</td>
                    <td className='border border-sky-500 px-5'>{item.dob}</td>
                    <td className='border border-sky-500 px-5 py-1'>
                      <div className='flex gap-5 items-center'>
                        <button className='bg-green-600 rounded-md px-3 py-0.5' onClick={() => props.handleEdit(index)}>Edit</button>
                        <button className='bg-red-600 rounded-md px-3 py-0.5' onClick={() => props.handleDelete(index)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                )
              })}

          </tbody>
        </table>
        {(numbers.length === 0) ? (
          <p></p>
        ) : (
          <nav className='text-center'>
            <ul className='flex items-center'>
              <li className='border-2 border-[#000] px-2 py-1'>
                <a href="#" onClick={prePage}>prev</a>
              </li>

              {
                numbers.map((n) => {
                  return (
                    <li className={`border-2 border-[#000] py-1 px-2 ${currentPage === n ? 'bg-blue-200' : ''}`} key={n}>
                      <a href="#" onClick={() => changeCPage(n)}>{n}</a>
                    </li>
                  )
                })
              }

              <li className='border-2 border-[#000] px-2 py-1'>
                <a href="#" onClick={nextPage}>next</a>
              </li>
            </ul>
          </nav>
        )
        }
      </div >
    </>
  )
}

export default UserTable
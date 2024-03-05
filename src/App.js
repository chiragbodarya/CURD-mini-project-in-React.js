import React, { useState } from 'react';
import UserForm from './component/UserForm';
import Table from './component/UserTable';

const App = () => {
  const [arr, setArr] = useState([]);
  const [update, setuapade] = useState();
  const getData = (userData) => {
    // console.log('this data coming for UserForm ', userData)
    localStorage.setItem('userData', userData);
    if (arr.length == 0) {
      setArr(arr => [...arr, { ...userData, id: 1 }]);
    } else {
      setArr(arr => [...arr, { ...userData, id: arr[arr.length - 1].id + 1 }]);
    }
  }
  // console.log(arr)

  const handleDelete = (index) => {
    if (window.confirm('Are you sure delete this data')) {
      const deletedData = arr.filter((_, Deletedindex) => Deletedindex !== index);
      setArr(deletedData);
    }
  }

  const handleEdit = (index) => {
    const editData = arr[index];
    setuapade(editData)
  }

  const updateData = (data) => {
    const userList = [...arr];
    userList.forEach((upo, index) => {
      if (upo.id == data.id) {  
        userList[index] = data
      }
    });
    setArr(userList)
  }


  return (
    <div className='flex flex-wrap justify-center gap-20 pt-20 '>
      <div className='border-2 border-[#000] bg-[] p-4 '>
        <UserForm handleUserData={getData} update={update} updateHandler={updateData} />
      </div>
      <div className='border-2 border-[#000] bg-[] p-4 '>
        <Table showFormData={arr} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';

const Task = () => {
  const myArray = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Sarah", age: 32 },
    { id: 3, name: "Mike", age: 24 }
  ];
  const [data, setData] = useState([])
  
  const handle = () => {
    setData(myArray);
  };

  console.log(data); 

  return (
    <div>
      <button onClick={handle}>Click</button>
      {/* {
        data.map((item) => (
          <div key={item.id}>
            <p>id: {item.id}</p>
            <p>name: {item.name}</p>
            <p>age: {item.age}</p>
          </div>
        ))
      } */}
    </div>
  );
};

export default Task;

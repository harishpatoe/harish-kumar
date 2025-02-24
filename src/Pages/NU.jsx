import React from 'react'
import { useState } from 'react'




const NU = () => {
  const [data, setData] = useState("");
const handle =()=> {
  setData('Hello World');
}

console.log(data);
  return(
    <button onClick={(handle)}>Harivvansh</button>
  )
}

export default NU;

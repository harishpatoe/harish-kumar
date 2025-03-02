import React from 'react'
import { useState } from 'react'




const NU = () => {
  const [data, setData] = useState("");
const handle =()=> {
  setData('Harish is good Person');
}

console.log(data);
  return(
    <button onClick={(handle)} type='primary'>Harish</button>
  )
}

export default NU;

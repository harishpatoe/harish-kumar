import React from 'react'


const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" placeholder='Enter E-Mail'/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder='Enter Password'/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login

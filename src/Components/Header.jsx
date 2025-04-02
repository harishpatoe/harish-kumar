import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h1 className='text-2xl font-bold'>My Application</h1>
      <nav className='flex space-x-4'>
        <a href="/" className='hover:text-gray-400'>Home</a>
        <a href="/about" className='hover:text-gray-400'>About</a>
        <a href="/contact" className='hover:text-gray-400'>Contact</a>
      </nav>
    </div>
  )
}

export default Header

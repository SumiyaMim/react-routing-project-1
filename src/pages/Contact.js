import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  /** useNavigate used for redirect */
  const navigate = useNavigate()

  return (
    <div className='page'>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        </p>

        {/* redirect */}
        <div className='btn'>
          <button onClick={() => {
            navigate('/')
          }}>Go to Home Page</button>
        </div>
    </div>
  )
}

export default Contact

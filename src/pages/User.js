import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {

    /** Here, useParams used for route parameter */
    // const{userid} = useParams()

    const [searchParams, setSearchParams] = useSearchParams()
    
    const [name, setName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchParams({name: name})
    }

  return (
    <div>
      <h2>USER</h2>
      {/* <h1>{userid}</h1> */}

     <form onSubmit={handleSubmit} className='user'>
        <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button type='submit'>Find User</button>
     </form>

      {/* http://localhost:3000/user?id=101&age=20&name=mim */}
      {/* <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("age")}</h1>
      <h1>{searchParams.get("name")}</h1> */}
    </div>
  )
}

export default User

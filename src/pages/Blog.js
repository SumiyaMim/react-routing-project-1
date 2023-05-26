import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { blogsData } from '../data'

// dynamic routing using useParams, useLocation

const Blog = () => {

    /** useParams Hook */
    const { title } = useParams()

    /** useLocation Hook */
    const location = useLocation()


    /** used in useParams Hook */
    // const [bodyData, setBodyData] = useState("")

    // useEffect(() => {
    //    const blogData = blogsData.filter((blog) => blog.title !== title)
    //    setBodyData(blogData[0].body)
    // }, [])

  return (
    <div className='blog'>
      <h1>{title}</h1>
      {/* Here, display body using 2 paragraph */}
      {/* <p>{bodyData.slice(0,300)}</p>
      <p>{bodyData.slice(301,1000)}</p> */}

      {/* <p>{bodyData.slice(0,1000)}</p> */}
      <p>{location.state.body.slice(0,1000)}</p>
    </div>
  )
}

export default Blog

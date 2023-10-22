import React from 'react'

const ShortEmail = (props) => {
  return (
    <div>
      <div className='content contentborder'>
      <div> <p className='logo'>F</p> </div>
      <div>
        <p className='details'>From : {props.email} </p>
        <p className='details'>Subject : {props.subject} </p>
        <p className='details'> {props.short_description} </p>
        <p className='details'> {props.date} a.m </p>
        </div>
      </div>
    </div>
  )
}

export default ShortEmail;
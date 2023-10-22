import React from 'react';
import "./emaillist.css";
import ShortEmail from './shortemail';
import LIST from '../list';

const Emaildetails =(content) => {
  <ShortEmail 
   name = {content.name}
   email = {content.email}
   short_description = {content.short_description}
   date = {content.date}
  />
}

const EmailList = () => {
  return (
    <div className='emaillist'> 
      <div className='filter'>
            <p>Filter By :</p>
            <button>Un Read</button>
            <button>Read</button>
            <button>Favourite</button>
      </div>
        {LIST.map(Emaildetails)}
    </div>
  )
}

export default EmailList;
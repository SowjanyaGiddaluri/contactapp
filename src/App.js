import ContactItem from '../src/components/ContactItem/ContactItem';
import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999955555,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 9999955525,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955535,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Tom',
    mobileNo: 9999955444,
    isFavorite: false,
  }
];

const App = () => {
  const [contactsList, setContactsList] = useState(initialContactsList);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const onAddContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    };
    setContactsList((prevContactsList) => [...prevContactsList, newContact]);
    setName('');
    setMobileNo('');
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const toggleIsFavourite = id => {
    setContactsList(prevContactsList => 
      prevContactsList.map(contact => {
        if (id === contact.id) {
          return { ...contact, isFavorite: !contact.isFavorite };
        }
        return contact;
      })
    );
  };

  const deleteUser = id => {
    
    setContactsList(prevContactsList => 
      prevContactsList.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="contact-heading">Contacts</h1>
        <form className="contact-form-container" onSubmit={onAddContact}>
          <input
            value={name}
            className="input"
            placeholder="Name"
            onChange={onChangeName}
          />
          <input
            value={mobileNo}
            className="input"
            placeholder="Mobile No"
            onChange={onChangeMobileNo}
          />
          <button type="submit" className="contact-btn">
            Add Contact
          </button>
        </form>
        <ul>
          <li className="table-header">
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Mobile Number</p>
          </li>
          {contactsList.map((eachContact) => (
            <ContactItem 
              key={eachContact.id} 
              contactDetails={eachContact} 
              toggleIsFavourite={toggleIsFavourite}
              deleteUser={deleteUser}// Pass the deleteUser function
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

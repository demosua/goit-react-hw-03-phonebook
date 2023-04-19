import React from 'react';
import { Item, Avatar, Name, Number, Phone, Trash } from './ContactItem.styled';
import { IoPersonOutline, IoCallOutline, IoTrashOutline } from 'react-icons/io5';


const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Item>
        <Avatar><IoPersonOutline size="20px" /></Avatar>
        <Name>{name}:</Name>
        <Number>{number}</Number>
        <Phone href={`tel: ${number}`}><IoCallOutline size="20px" /></Phone>
        <Trash><IoTrashOutline size="20px" onClick={() => onDeleteContact(id)} /></Trash>
      </Item>
    </>
  )
};
  
export default ContactItem;
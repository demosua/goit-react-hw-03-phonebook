import ContactItem from "../ContactItem";
import PropTypes from 'prop-types';
import { Contact } from './Contacts.styled'

const Contacts = ({ contacts, onDeleteContact }) => {
  
  return (
    <Contact>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
          ))}
    </Contact>
  )
};
  
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
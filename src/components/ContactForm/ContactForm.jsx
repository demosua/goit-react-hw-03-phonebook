import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Form, Label, Input, Button } from './ContactForm.styled';
import { IoPersonAddOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const isContact = this.props.contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length > 0
    const isNumber = this.props.contacts.filter(contact => contact.number.toLowerCase() === number.toLowerCase()).length > 0

    if(isContact || isNumber){
      isContact ? this.setState({name: ''}) : this.setState({number: ''})
      isContact ? alert(`${name} is already in contacts.`) : alert(`${number} is already in contacts.`)
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
    <>
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor ={nameInputId}>
          Name
        </Label>
          <Input
            type="text"
            name="name"
            id={nameInputId}
            value={this.state.name}
            onChange = {this.handleChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <Label htmlFor ={numberInputId}>
          Number
        </Label>
          <Input
            type="tel"
            name="number"
            id={numberInputId}
            value={this.state.number}
            onChange = {this.handleChange}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
            <Button type="submit"><IoPersonAddOutline /></Button>            
      </Form>
    </>
  )
  }
};
  
export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
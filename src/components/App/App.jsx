import React, { Component } from "react";
import { IconContext } from "react-icons";
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import { theme } from "constants";

const LS_KEY = 'phonebook';
  
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const savedPhonebook = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedPhonebook) {
      this.setState({contacts: savedPhonebook})
    }
  }

  componentDidUpdate(PrevProps, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
    }
  }

  addContact = data => {
    const contactId = nanoid();
    const contact = {id: contactId, name: data.name, number: data.number,};
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({contacts: this.state.contacts.filter(contact => contact.id !== contactId)}))
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: theme.colors.iconColor, size: "2em", className: "global-class-name" }}>
      <Container>
        <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} contacts={this.state.contacts}/>  
        </Section>
        <h2>Contacts</h2>  
          <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
        </Container>
      </IconContext.Provider>
    )
  }
}

export default App;
import { Component } from 'react';
import {ContactToSelect} from './ContactToSelect';

export class ContactList extends Component {
  state={
    remove:'',
  }
  render() {
    const { filterContacts, remove } = this.state;
    return (
      <ul>
        {filterContacts.map(contact => (
          <li key={contact.id}>
            <ContactToSelect
              name={contact.name}
              number={contact.number}
              remove={remove}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    );
  }
}

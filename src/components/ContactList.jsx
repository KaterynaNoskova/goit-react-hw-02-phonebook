import ContactToSelect from './ContactToSelect';

const ContactList = ({ filterContacts, remove }) => {
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
};
export default ContactList;

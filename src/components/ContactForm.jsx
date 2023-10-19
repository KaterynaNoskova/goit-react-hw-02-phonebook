import ContactToSelect from './ContactToSelect';

const ContactForm = ({ filterContacts, remove }) => {
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
export default ContactForm;

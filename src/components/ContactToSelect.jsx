const ContactToSelect = ({ name, number, remove, id }) => {
  return (
    <div>
      <span>
        {name}:{number}
      </span>
      <button type="button" onClick={() => remove(id)}>
        Delete
      </button>
    </div>
  );
};
export default ContactToSelect;

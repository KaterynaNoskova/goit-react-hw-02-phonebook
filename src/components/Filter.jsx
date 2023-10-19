const Filter = ({ change, filter }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={change} value={filter} />
    </div>
  );
};
export default Filter;

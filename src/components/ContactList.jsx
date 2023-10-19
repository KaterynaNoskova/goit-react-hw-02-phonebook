import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  change = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  submit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submit}>
        <h1>Phonebook</h1>
        <span>Name</span>
        <input
          type="text"
          name="name"
          title="Input Name"
          required
          onChange={this.change}
          value={name}
        />
        <span>Number</span>
        <input
          type="tel"
          name="number"
          title="Input Number"
          required
          onChange={this.change}
          value={number}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;

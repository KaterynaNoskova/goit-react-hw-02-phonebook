import { Component } from 'react';

export class Filter extends Component {
  state={
    filter:''
  }
  handleChange = evt =>{
    this.setState({filter:evt.target.value});
  }
  render() {
    const { filter } = this.state;
    return (
      <div>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.handleChange} value={filter} />
      </div>
    );
  }
}

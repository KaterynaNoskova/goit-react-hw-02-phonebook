import { Component } from 'react';

export class ContactToSelect extends Component {
  render() {
    const { name, number, remove, id } = this.state;
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
  }
}

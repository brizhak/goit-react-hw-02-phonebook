import { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactList.module.css';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
